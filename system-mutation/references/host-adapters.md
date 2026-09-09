# Host-specific invocation

Use a direct official command or API unless a demonstrated interface gap requires
an adapter. Inspect command identity, resolution precedence and manager shims before
probing; even a version command can trigger acquisition. Distinguish missing tools,
denied access, ambiguous identity and failed execution in ordinary task output.

Use native paths and quoting for the selected shell. Resolve links and filesystem
boundaries before destructive changes. Prefer stable structured output or exit
semantics to parsing localized diagnostic text. Verify the relevant resulting state.

## When implementing a PowerShell command or provider

Preserve native parameter binding, common parameters, streams and error records.
Resolve module dependencies explicitly. Use SupportsShouldProcess for mutations
and honor WhatIf/Confirm without adding a second approval protocol. Verify module
loading and invocation in a fresh process when session state could hide defects.

## When implementing mutation code

Use software-development's claim-appropriate tests. Disposable fixtures should
exercise promised retry, partial-failure and cleanup behavior at the affected
boundaries. For a direct command, check the actual outcome and owned residue;
do not create test infrastructure or induce unrelated host failures.
