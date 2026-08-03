# Hermes integration

Confirm current commands from official documentation and local `hermes mcp --help`;
do not assume an older configuration schema.

1. Install the provider outside the Hermes environment and identify its absolute
   executable path or stable service URL.
2. Register it with the current `hermes mcp add NAME` command, supplying either the
   command transport or URL transport and only required environment variables.
3. Inspect the registered entry with current list or configuration commands.
4. Use the current test operation to distinguish startup, transport, protocol,
   authentication, and tool-call failures.
5. Restart or reload Hermes so discovery is tested without inherited process state.
6. Invoke one harmless real tool and inspect its returned content.
7. Record the exact remove and upgrade commands.

Prefer a narrow server over exposing a general shell. Do not install providers into
Hermes's own virtual environment, edit internal package files, or grant broad host
access to avoid a precise configuration problem.
