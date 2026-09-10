# Backup transfer and verification

Inspect source and destination using the backup tool's supported interface. Resolve
repository identity, namespace, snapshot inventory, credentials and retention
requirements. Classify the destination as empty, compatible, different or unknown.
Never initialize or overwrite an unknown repository to make inspection succeed.

Select a local or remote destination explicitly. Source read authority does not
authorize transmitting backup data or mutating a remote account. For a remote
repository, establish the exact snapshots, indexes, object metadata and other data
that leave the source boundary; provider, account, endpoint and namespace; credential
scope; encryption in transit and at rest; key ownership, recovery and rotation;
storage/request/egress cost; retention, deletion and provider-side residue; and the
provider's current consistency, locking, resumability and commit semantics. Resolve
only fields material to the selected backend, but do so before transfer.

Select the tool's official migration method. A physical relocation may require
unchanged object names, bytes, keys and lineage; a supported logical transfer may
create new identifiers or encryption state. Establish which history and restore
properties must survive before choosing. Do not infer a safe raw copy from the
fact that the backend exposes files. Respect the tool's consistency/locking rules.

For an authorized migration, keep the source recoverable, transfer the selected
history, and compare the required inventory and metadata. Restore representative
content into owned scratch when restore validation is in scope and compare it with
known source content. Test continued writes only if the requested migration includes
that claim and a new snapshot is authorized. A copied object count or byte total
does not prove repository lineage, decryptability, snapshot consistency or restore
behavior.

Use the backup tool's bounded, resumable operation only when it preserves the
selected history and target contract. After interruption, timeout or ambiguous
provider acknowledgement, inspect destination inventory and provider state before
retrying. Resume only confirmed missing eligible data from the unchanged source;
do not initialize again, restart a non-idempotent transfer blindly, prune partial
state or delete the source as recovery. If remote inventory is unavailable, report
transfer state as uncertain and preserve source, keys and recovery information.

For verification-only, perform the requested read/check operations; do not create
snapshots, initialize, repair, prune or change retention. A restore writes local
output and must fit the agreed verification scope. Verifying a remote repository
may disclose repository identifiers and request provider reads or incur egress;
admit those effects without turning verification into migration.

Report transferred and verified scope separately, including changed identities,
missing history and unrun restore/write checks. Keep source and recovery material
until their retirement is authorized. Observe both provider-side repository state
and the intended backup consumer before claiming completion. Record changed
identities, encryption/key changes, retained remote partial data, charges and
deletion limits when material. A completed copy alone does not prove a usable
backup. Redact credentials and clean only owned verification output.
