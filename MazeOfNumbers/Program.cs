using System.Diagnostics;

namespace Program
{
    class Program
    {
        // General Variables
        public static Random rng = new Random();

        // Visual Variables
        public static int leftPadding = 2;
        public static int topPadding = 1;
        public static int statsLeftPadding = 1;
        public static int statsTopPadding = 1;
        public static bool isFancy = true;
        public static ConsoleColor bgColor = ConsoleColor.Black;


        // Game Variables
        public struct Player
        {
            public int x;
            public int y;
            public int life;
            public int score;
        }

        public struct ScoreNumber
        {
            public int x;
            public int y;
            public int val;
        }

        // Game State
        public static bool gameIsRunnng = false;

        // Board Variables
        public static int gridWidth = 53;
        public static int gridHeight = 23;
        public static int numberAmount = 70;
        public static char[,] grid = new char[gridHeight, gridWidth];
        public static ScoreNumber[] numbers = new ScoreNumber[numberAmount];
        public static Player player;

        // Game Timers
        public static long playerTimer = Stopwatch.GetTimestamp() / TimeSpan.TicksPerMillisecond;
        public static long enemyTimer = Stopwatch.GetTimestamp() / TimeSpan.TicksPerMillisecond;
        public static long numberDecreaseTimer = Stopwatch.GetTimestamp() / TimeSpan.TicksPerMillisecond;
        public static long gameTime = 0;

        static void Main(string[] args)
        {
            // Console Visual Setup
            Console.CursorVisible = false;
            Console.ResetColor();
            if (isFancy)
            {
                Console.OutputEncoding = System.Text.Encoding.Unicode;
                Console.BackgroundColor = bgColor;
            }
            Console.Clear();

            // Main Functions
            startTheGame();
            mainGameLoop();
        }

        // This function sets up everything thats needed in this game. Such as walls, player and numbers.
        static void startTheGame()
        {
            Console.SetWindowSize(2 * gridWidth + leftPadding + statsLeftPadding + 20, gridHeight + topPadding + 1);

            // Clear the grid by setting every tile to empty.
            for (int i = 0; i < gridWidth; i++)
            {
                for (int j = 0; j < gridHeight; j++)
                {
                    setGrid(i, j, ' ');
                }
            }

            // Put outer walls.
            for (int i = 0; i < gridWidth; i++)
            {
                setGrid(i, 0, '#');
                setGrid(i, gridHeight - 1, '#');
            }
            for (int i = 0; i < gridHeight; i++)
            {
                setGrid(0, i, '#');
                setGrid(gridWidth - 1, i, '#');
            }

            // Put inner walls.
            int totalWalls = 0;
            while (totalWalls < 28)
            {
                // This part is used to find the width of the walls.
                int w = 3;
                int h = 1;
                if (totalWalls < 3)
                {
                    w = 11;
                }
                else if (totalWalls < 8)
                {
                    w = 7;
                }

                // Generate a new number between 0 and 2, if it is 0 (50%) rotate it.
                if (rng.Next(0, 2) == 0)
                {
                    int t = w;
                    w = h;
                    h = t;
                }

                // Find a random x/y position to test.
                int x = rng.Next(2 + w / 2, gridWidth - (2 + w / 2));
                int y = rng.Next(2 + h / 2, gridHeight - (2 + h / 2));

                // We look at the neighbor cells and try to find if the position is available for the current wall.
                bool possibleLocation = true;
                for (int i = -w / 2 - 1; (i <= w / 2 + 1 && possibleLocation); i++)
                {
                    for (int j = -h / 2 - 1; (j <= h / 2 + 1 && possibleLocation); j++)
                    {
                        possibleLocation = isEmpty(x + i, y + j);
                    }
                }

                // If it is possible to put the wall, put it.
                if (possibleLocation)
                {
                    for (int i = -w / 2; i <= w / 2; i++)
                    {
                        for (int j = -h / 2; j <= h / 2; j++)
                        {
                            setGrid(x + i, y + j, '#');
                        }
                    }
                    totalWalls++;
                }
            }

            // Put Numbers
            for (int i = 0; i < numberAmount; i++)
            {
                // Find an empty space for the number.
                int x;
                int y;
                bool empty;
                do
                {
                    x = rng.Next(0, gridWidth);
                    y = rng.Next(0, gridHeight);
                    empty = isEmpty(x, y);
                } while (!empty);

                // Initialize the number.
                int value = rng.Next(0, 10);
                numbers[i].x = x;
                numbers[i].y = y;
                numbers[i].val = value;
                setGrid(x, y, Convert.ToChar('0' + value));
            }

            // Finally, Put The Player
            player.life = 5;
            player.score = 0;
            do
            {
                player.x = rng.Next(1, gridWidth - 1);
                player.y = rng.Next(1, gridHeight - 1);
            }
            while (!isEmpty(player.x, player.y));
            setGrid(player.x, player.y, 'P');

            gameIsRunnng = true;
        }

        public static void mainGameLoop()
        {
            while (gameIsRunnng)
            {
                long currentTime = Stopwatch.GetTimestamp() / TimeSpan.TicksPerMillisecond;

                // Render Stats
                Console.ForegroundColor = ConsoleColor.Red;
                string life = "";
                for (int i = 0; i < 5; i++) life += (i < player.life) ? "❤" : "  ";
                writeAt(gridWidth + statsLeftPadding, statsTopPadding, "Life: " + life);
                Console.ResetColor();

                Console.ForegroundColor = ConsoleColor.White;
                writeAt(gridWidth + statsLeftPadding, statsTopPadding + 2, "Time: " + gameTime);
                Console.ResetColor();

                Console.ForegroundColor = ConsoleColor.White;
                writeAt(gridWidth + statsLeftPadding, statsTopPadding + 4, "Score: " + player.score);
                Console.ResetColor();

                // Every 50ms
                if (currentTime - playerTimer >= 50)
                {
                    // Player Move
                    if (Console.KeyAvailable)
                    {
                        string key = Console.ReadKey(true).Key.ToString();
                        switch (key)
                        {
                            case "W":
                                tryToMove(0, -1);
                                break;
                            case "A":
                                tryToMove(-1, 0);
                                break;
                            case "S":
                                tryToMove(0, 1);
                                break;
                            case "D":
                                tryToMove(1, 0);
                                break;
                        }
                    }

                    while (Console.KeyAvailable) Console.ReadKey(true);

                    playerTimer = currentTime;
                }

                // Every 15000ms (15 sec)
                if (currentTime - numberDecreaseTimer >= 15000)
                {
                    // Loop over all numbers, decrease according to their values.
                    for (int i = 0; i < numberAmount; i++)
                    {
                        int x = numbers[i].x;
                        int y = numbers[i].y;
                        int val = numbers[i].val;

                        if (val > 1)
                        {
                            numbers[i].val -= 1; // (9-2) to (8-1)
                        }
                        else if (val == 1)
                        {
                            if (rng.Next(0, 100) < 3) // 3% chance
                            {
                                numbers[i].val -= 1; // 1 to 0
                            }
                        }

                        setGrid(x, y, Convert.ToChar(val + '0'));
                    }

                    numberDecreaseTimer = currentTime;
                }

                // Every 1000ms (1 sec)
                if (currentTime - enemyTimer >= 1000)
                {
                    // Enemy Move
                    for (int i = 0; i < numberAmount; i++)
                    {
                        if (numbers[i].val == 0)
                        {
                            int x = numbers[i].x;
                            int y = numbers[i].y;

                            // Check for every side (right, up, left, down) to see if they are possible to move for 0.
                            bool[] possibleSides = new bool[4];
                            possibleSides[0] = isEmpty(x + 1, y) || isPlayer(x + 1, y);
                            possibleSides[1] = isEmpty(x, y + 1) || isPlayer(x, y + 1);
                            possibleSides[2] = isEmpty(x - 1, y) || isPlayer(x - 1, y);
                            possibleSides[3] = isEmpty(x, y - 1) || isPlayer(x, y - 1);

                            // If at least 1 of them is possible move.
                            if (possibleSides[0] || possibleSides[1] || possibleSides[2] || possibleSides[3])
                            {
                                // Loop within the possibleSides array randomly to find a random side.
                                int randomSide = -1;
                                while (randomSide == -1)
                                {
                                    int side = rng.Next(0, 4);
                                    if (possibleSides[side])
                                    {
                                        randomSide = side;
                                    }
                                }

                                // Set the current location empty, then move the (x, y) according to selected side.
                                setGrid(x, y, ' ');
                                switch (randomSide)
                                {
                                    case 0:
                                        x += 1;
                                        break;
                                    case 1:
                                        y += 1;
                                        break;
                                    case 2:
                                        x -= 1;
                                        break;
                                    case 3:
                                        y -= 1;
                                        break;
                                }

                                // If the position it moves is a player, trigger the lose condition.
                                if (isPlayer(x, y))
                                {
                                    player.life--;
                                    Console.Beep();

                                    // If player doesn't have any more lifes, the game needs to stop (todo) and end screen needs to start.
                                    if (player.life == 0)
                                    {
                                        gameIsRunnng = false;
                                    }
                                    else
                                    {
                                        // If the player is not dead (0 life), choose a new random position for the player.
                                        do
                                        {
                                            player.x = rng.Next(1, gridWidth - 1);
                                            player.y = rng.Next(1, gridHeight - 1);
                                        }
                                        while (!isEmpty(player.x, player.y));
                                        setGrid(player.x, player.y, 'P');
                                    }
                                }


                                setGrid(x, y, '0');
                                numbers[i].x = x;
                                numbers[i].y = y;
                            }
                        }
                    }
                    enemyTimer = currentTime;
                }

                gameTime += Stopwatch.GetTimestamp() / TimeSpan.TicksPerSecond - currentTime / 1000;
            }

            Console.SetCursorPosition(0, 1000);
        }

        public static void writeAt(int x, int y, string s)
        {
            if (isFancy)
            {
                Console.SetCursorPosition(2 * x + leftPadding, y + topPadding);
                Console.Write(s);
                Console.ResetColor();
                Console.BackgroundColor = ConsoleColor.DarkGray;
            }
            else
            {
                // A simple write to position function.
                Console.SetCursorPosition(x, y);
                Console.Write(s);
            }
        }

        // Main Write Function
        public static void writeAt(int x, int y, char s)
        {
            // This fancy part turns the given characters into their own unicodes to write. Unicodes take 16 bytes instead of 8 (like ascii) so they are 2 characters. We must use string instead!
            if (isFancy)
            {
                string lastString = Convert.ToString(s);
                switch (s)
                {
                    case ' ':
                        lastString = "  ";
                        break;
                    case 'P':
                        Console.ForegroundColor = ConsoleColor.Blue; // Dark Blue
                        lastString = "\uFF20";
                        break;
                    case '#':
                        Console.ForegroundColor = ConsoleColor.DarkGray; // Gray
                        lastString = "■";
                        break;
                    default:
                        int num = s - '0';
                        if (num < 5 && num != 0)
                        {
                            Console.ForegroundColor = ConsoleColor.DarkYellow;
                        }
                        else if (num != 0)
                        {
                            Console.ForegroundColor = ConsoleColor.Yellow;
                        }
                        else
                        {
                            Console.ForegroundColor = ConsoleColor.DarkRed;
                        }
                        lastString = Convert.ToString(Convert.ToChar(0xFF10 + num));
                        break;
                }

                Console.SetCursorPosition(2 * x + leftPadding, y + topPadding);
                Console.Write(lastString);
                Console.ResetColor();
                // Console.BackgroundColor = ConsoleColor.DarkGray;
                Console.BackgroundColor = bgColor;
            }
            else
            {
                // A simple write to position function.
                Console.SetCursorPosition(x, y);
                Console.Write(s);
            }
        }

        // Misc Functions
        public static bool isEmpty(int x, int y)
        {
            return grid[y, x] == ' ';
        }

        public static bool isWall(int x, int y)
        {
            return grid[y, x] == '#';
        }

        public static bool isPlayer(int x, int y)
        {
            return grid[y, x] == 'P';
        }

        public static bool isNumber(int x, int y)
        {
            // If not empty, not wall, not player, must be a number (easier than just checking if it is a number or not)
            return !isEmpty(x, y) && !isWall(x, y) && !isPlayer(x, y);
        }

        public static void setGrid(int x, int y, char val)
        {
            grid[y, x] = val;
            writeAt(x, y, val);
        }

        // Player Movement
        public static void tryToMove(int dx, int dy)
        {
            int targetX = player.x + dx;
            int targetY = player.y + dy;

            // If the target position is a number, we need to check if it is pushable or not.
            if (isNumber(targetX, targetY))
            {
                // If the push function returns true, that means that sequence of numbers (or just 1 number) has been either pushed or crushed.
                bool movedOrCrushed = push(targetX, targetY, dx, dy, 10);
                if (movedOrCrushed)
                {
                    setGrid(player.x, player.y, ' ');
                    setGrid(targetX, targetY, 'P');
                    player.x = targetX;
                    player.y = targetY;
                }
            }
            else if (isEmpty(targetX, targetY))
            {
                // If the target tile is empty, just move normally.
                setGrid(player.x, player.y, ' ');
                setGrid(targetX, targetY, 'P');
                player.x = targetX;
                player.y = targetY;
            }
        }

        // Main Push Function. This function checks for a tile to see if it can move by the given (dx, dy) vector or not.
        public static bool push(int baseX, int baseY, int dx, int dy, int prevVal)
        {
            char currentChar = grid[baseY, baseX];

            // Target position is the position of this current character wants to go.
            int targetX = baseX + dx;
            int targetY = baseY + dy;

            // If the target position is a number, we need to check if this current character's value is greater than target ones or not.
            if (isNumber(targetX, targetY))
            {
                int currentVal = currentChar - '0';
                int targetVal = grid[targetY, targetX] - '0';

                // If current tiles value is greater than or equals the target tiles value, it is pushable.
                if (currentVal >= targetVal)
                {
                    // If this current value is greater than or equals to the target value, try to push the target (next number) with the same (dx, dy) vector.
                    bool movedOrCrushed = push(targetX, targetY, dx, dy, currentVal);
                    if (movedOrCrushed)
                    {
                        for (int i = 0; i < numberAmount; i++)
                        {
                            if (numbers[i].x == baseX && numbers[i].y == baseY)
                            {
                                numbers[i].x = targetX;
                                numbers[i].y = targetY;
                                break;
                            }
                        }
                        setGrid(baseX, baseY, ' '); // Set current position empty.
                        setGrid(targetX, targetY, currentChar); // Set next position current value.

                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            else if (isEmpty(targetX, targetY))
            {
                // In this case, next tile is empty. So we can just move this current char, to the next position.
                for (int i = 0; i < numberAmount; i++)
                {
                    if (numbers[i].x == baseX && numbers[i].y == baseY)
                    {
                        numbers[i].x = targetX;
                        numbers[i].y = targetY;
                        break;
                    }
                }
                setGrid(baseX, baseY, ' '); // Set current position empty.
                setGrid(targetX, targetY, currentChar); // Set next position current value.

                return true;
            }
            else
            {
                // In this case, next tile is a wall. We now need to check if this is the first number to get pushed (P5#) or if there has been more than one (P52#)
                // PrevVal is the value of the tile thats pushing this current one. It can be 10 ONLY IF it is a player.
                // If the previous tile was 10, so if it was a player it is a 1 push condition which means it can not push or crush.
                // Otherwise just crush that current number, and return true so the previous tile knows if the next one is either pushed or crushed
                if (prevVal != 10)
                {
                    // Not the first number to get pushed.
                    crushNumber(baseX, baseY);
                    return true;
                }
                else
                {
                    // First number to get pushed.
                    return false;
                }
            }
        }

        // Main Crush Function
        public static void crushNumber(int x, int y)
        {
            // Loop over all of the numbers.
            for (int i = 0; i < numberAmount; i++)
            {
                // Find the number from numbers list.
                if (numbers[i].x == x && numbers[i].y == y)
                {
                    // Find a new empty position for the number that has been crushed.
                    do
                    {
                        numbers[i].x = rng.Next(1, gridWidth - 1);
                        numbers[i].y = rng.Next(1, gridHeight - 1);
                    }
                    while (!isEmpty(numbers[i].x, numbers[i].y));

                    // Find a new value for the crushed tile.
                    int crushedValue = numbers[i].val;
                    numbers[i].val = rng.Next(5, 10);

                    setGrid(x, y, ' ');
                    setGrid(numbers[i].x, numbers[i].y, Convert.ToChar(numbers[i].val + '0'));

                    // Give score to the player depending on the number.
                    if (crushedValue == 0)
                    {
                        player.score += 20;
                    }
                    else if (crushedValue < 5)
                    {
                        player.score += 2;
                    }
                    else
                    {
                        player.score += 1;
                    }

                    break;
                }
            }
            // Console.Beep();
        }
    }
}