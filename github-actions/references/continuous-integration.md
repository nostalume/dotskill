# Continuous integration

CI establishes named software claims for a revision; it does not decide what the
product should mean. Derive commands and supported matrices from the repository's
software contract.

## Shape

1. Choose the narrowest events that provide the required feedback: pull request,
   push to protected/default branches, merge queue, schedule, or explicit manual
   diagnosis. Avoid duplicate runs for the same claim unless each event has a
   distinct consumer.
2. Default to read-only contents or `permissions: {}` and no secrets. Make fork and
   Dependabot pull requests safe without privileged fallback.
3. Use one job and the repository's canonical setup/check command. Split jobs only
   when checks require different runners, permissions, isolation, or independently
   useful status/artifacts.
4. Test only declared operating systems, architectures, features, and runtime
   versions. Identify one required representative lane; mark experimental lanes
   explicitly rather than weakening all failures.
5. Use branch/ref-scoped concurrency to cancel obsolete CI work and explicit
   timeouts to bound hung commands. Retry only a classified transient operation;
   never hide deterministic failures behind blanket retries.
6. Treat caches as disposable performance hints, not trusted build outputs. Keys
   include the inputs that determine compatibility; untrusted cache content cannot
   authorize release or deployment.

## Evidence

Keep required check/job names stable when branch policy consumes them. Preserve
command exit status and upload logs or artifacts only when they aid a named
diagnostic or downstream boundary. Inspect an authorized GitHub run for the exact
event and revision, including skipped/cancelled jobs and the fork/secret behavior
when relevant.

Completion requires the intended event to select the intended revision, each job
to exercise its named claim with minimal authority, supported matrices to match the
software contract, and an observed run for GitHub-specific behavior.
