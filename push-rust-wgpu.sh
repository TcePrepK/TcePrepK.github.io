#!/usr/bin/env python3
import subprocess
import shutil
import os
from pathlib import Path

# Change to the directory
game_name = "RustWGPU"
github_io_dir = Path("../TcePrepKgithubio")
src_dir = "pkg"
ignore_dir = "pkg/.gitignore"

def get_commit_id():
    """Get the current Git commit hash."""
    result = subprocess.run(['git', 'rev-parse', 'HEAD'], capture_output=True, text=True, check=True)
    return result.stdout.strip()

def build_project():
    """Run the wasm-pack command."""
    subprocess.run(['wasm-pack', 'build', '--target', 'web'], check=True)

def copy_files(src, dest):
    """Copy files from pkg to dest, replicating the robocopy functionality."""
    src_path = Path(src)
    dest_path = Path(dest)
    ignore_path = Path(dest / ".gitignore")

    if not src_path.exists():
        raise FileNotFoundError(f"Source directory {src_path} does not exist.")

    if dest_path.exists():
        shutil.rmtree(dest_path)  # Remove destination folder if it exists
    shutil.copytree(src_path, dest_path)

    # If .gitignore exists, remove it
    if ignore_path.exists():
        ignore_path.unlink()

def commit_and_push(short_commit_id):
    """Commit and push changes to the Git repository."""
    subprocess.run(['git', 'add', '.'], check=True)
    commit_message = f"RustWGPU {short_commit_id}"
    subprocess.run(['git', 'commit', '-m', commit_message], check=True)
    subprocess.run(['git', 'push'], check=True)

def main():
    try:
        game_dir = Path(f"../{game_name}")

        if not game_dir.exists():
            raise FileNotFoundError(f"Directory {game_dir} does not exist.")

        # Change directory to FarmingGame
        print(f"Changing directory to {game_dir}")
        os.chdir(game_dir)

        # Get the commit ID
        commit_id = get_commit_id()
        short_commit_id = commit_id[:7]
        print(f"Short commit ID: {short_commit_id}")

        # Build the project
        print("Building the project...")
        build_project()

        # Copy files from "dist/" to "../TcePrepKgithubio/{game_name}/pkg"
        dest_dir = github_io_dir / f"{game_name}/pkg"
        print(f"Copying files from {src_dir} to {dest_dir}")
        copy_files(src_dir, dest_dir)

        # Change directory to the GitHub Pages repository
        print(f"Changing directory to {github_io_dir}")
        os.chdir(github_io_dir)

        # Commit and push changes
        print("Committing and pushing changes...")
        commit_and_push(short_commit_id)

        print("All tasks completed successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
