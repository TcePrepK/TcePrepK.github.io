#!/usr/bin/env python3
import subprocess
import shutil

def main():
    # Commit and push changes
    subprocess.run(['git', 'add', '.'], check=True)
    commit_message = f"_default-push"
    subprocess.run(['git', 'commit', '-m', commit_message], check=True)
    subprocess.run(['git', 'push'], check=True)

if __name__ == "__main__":
    main()
