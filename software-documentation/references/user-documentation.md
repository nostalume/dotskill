# User documentation

Write for a reader trying to accomplish an observable goal, not for the source
tree. Choose the form from the question: a tutorial teaches through one guided
success, a how-to solves one task, a concept explains a model, and troubleshooting
maps symptoms to diagnosis and recovery. Do not combine all four by default.

## Minimum successful path

Present, in this order when applicable:

1. the goal and expected result;
2. prerequisites, supported version/platform, permissions, cost, and destructive
   or external effects;
3. the shortest copyable sequence using public vocabulary;
4. one concrete observation that proves success;
5. options only where the reader must choose;
6. common failures with symptoms, cause, safe recovery, and residue;
7. compatibility or migration limits and the next useful step.

Separate commands from their output. State the working directory, shell/runtime,
placeholder syntax, and whether a command reads, changes, publishes, or deletes
state. Never hide required approval, credentials, network access, or cleanup in a
prerequisite paragraph.

## Reader-oriented checks

Run the path as the documented reader from the declared starting state. Prefer a
clean install or packaged artifact when users do not consume the source tree.
Confirm copy/paste behavior, output, errors, links, and recovery. Test unsupported
or dangerous variants when the document promises their refusal. Remove internal
details that neither change a user decision nor explain an observable failure.
