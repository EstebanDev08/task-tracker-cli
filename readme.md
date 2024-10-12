# Task CLI

This is a CLI application to manage your tasks from the terminal. You can add, edit, delete, and list tasks, as well as filter them by status.

## Architecture

This project follows the **Clean Hexagonal Architecture** (also known as **Ports and Adapters Architecture**). The goal of this architecture is to keep the business logic (domain) independent from the frameworks, external interfaces, and other delivery mechanisms like CLI or API.

The current implementation focuses on a **Command Line Interface (CLI)** for managing tasks, but the project is structured in such a way that additional interfaces (such as a **REST API**, **GraphQL**, or even a **Web UI**) can be implemented without changing the core logic. Each interface or delivery mechanism would be treated as a separate "adapter" that connects to the same core business logic.

### Key Benefits of Hexagonal Architecture:

- **Separation of concerns**: The business logic is isolated from the delivery mechanism.
- **Easy to extend**: You can easily add new interfaces (e.g., API, web) without modifying the core logic.
- **Testability**: The core logic can be tested independently from the external layers (like CLI or API).

## Installation

## Installation

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/EstebanDev08/task-tracker-cli.git
   cd task-tracker-cli
   ```

2. **Install project dependencies**:

   ```bash
   pnpm install
   ```

3. **Build the project** (if using TypeScript):

   ```bash
   pnpm run build
   ```

4. (Optional) **Create a symbolic link** to use the CLI globally:

   ```bash
   pnpm link
   ```

   This allows you to use the `task-traker` command from anywhere in your terminal.

## Using the CLI

The main command to manage your tasks is `task-traker`. Below are the available commands and their options.

### Available Commands

1. **Add a new task**:

   ```bash
   task-tracker task add "<description>"
   ```

   Example:

   ```bash
   task-traker task add "Buy milk"
   ```

   Adds a new task with the provided description.

2. **Edit an existing task**:

   ```bash
   task-traker task edit <id> "<description>"
   ```

   Example:

   ```bash
   task-traker task edit 1 "Buy milk and eggs"
   ```

   Edits the task with the specified ID and updates its description.

3. **Delete a task by ID**:

   ```bash
   task-traker task delete <id>
   ```

   Example:

   ```bash
   task-traker task delete 1
   ```

   Deletes the task with the specified ID.

4. **List all tasks**:

   ```bash
   task-traker task list
   ```

   Displays all tasks in a table format.

5. **List tasks by status**:

   ```bash
   task-traker task list <status>
   ```

   Where `<status>` can be:

   - `done`: To list completed tasks.
   - `in-progress`: To list tasks in progress.
   - `todo`: To list pending tasks.

   Examples:

   ```bash
   task-traker task list done
   task-traker task list in-progress
   task-traker task list todo
   ```

6. **Show help**:

   ```bash
   task-traker task help
   ```

   Displays a list of all available commands and their options.

## Usage Examples

- **Add a task**:

  ```bash
  task-traker task add "Do the groceries"
  ```

  This will add a task with the description `"Do the groceries"`.

- **Edit a task**:

  ```bash
  task-traker task edit 1 "Buy fruits and vegetables"
  ```

  This will edit the task with ID `1` and update its description to `"Buy fruits and vegetables"`.

- **List all tasks**:

  ```bash
  task-traker task list
  ```

  This will display a list of all tasks in table format.

- **List only completed tasks**:

  ```bash
  task-traker task list done
  ```

  This will show only the tasks marked as `done`.

## Common Errors

- If you try to use a command with an invalid status, you will see an error message like:

  ```bash
  Invalid status. Use "done", "in-progress", or "todo".
  ```

- If you don't provide a valid ID or description, you will receive a message indicating what went wrong. Make sure to follow the correct format.

## Uninstallation

If you used `npm link`, you can unlink the CLI globally by running:

```bash
npm unlink
```

## Contact

If you encounter issues or have suggestions, please open an issue in the repository or contact the developer at the following email: @EstebanDev08 or estebansolarte86@gmail.com.
