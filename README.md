# SW

## Quick start (Backend with Rancher Desktop)

### Prerequisites
- Windows with WSL 2 enabled
- Rancher Desktop installed
- WSL distro installed (example): wsl --install -d Ubuntu-22.04

### Build and run (containerd / nerdctl)
1. Open PowerShell.
2. Go to the backend folder: C:\Users\bence.balogh\Documents\SW\SWBackend
3. Build: nerdctl build -f Dockerfile.dev -t backend-dev .
4. Run: nerdctl run --name swbackend -p 3000:3000 backend-dev

The backend will be available at http://localhost:3000 (e.g. /people).

### Stop / remove
- Stop: nerdctl stop swbackend
- Remove: nerdctl rm swbackend

## Project notes
current long-term plans:
the game, which alredy exists in form of a console application, but sitting in a different repository.

This will be able to save the games, load them and save either only the high scores or the whole game to the backend/database.
So this will need a login.

web application, where user can log in and do.... idk what.

backend. Will definitely run in a kubernetes environment. Much later.