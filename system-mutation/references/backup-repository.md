# Backup transfer and verification

Inspect source and destination using the backup tool's supported interface. Resolve
repository identity, namespace, snapshot inventory, credentials and retention
requirements. Classify the destination as empty, compatible, different or unknown.
Never initialize or overwrite an unknown repository to make inspection succeed.

Select the tool's official migration method. A physical relocation may require
unchanged object names, bytes, keys and lineage; a supported logical transfer may
create new identifiers or encryption state. Establish which history and restore
properties must survive before choosing. Do not infer a safe raw copy from the
fact that the backend exposes files. Respect the tool's consistency/locking rules.

For an authorized migration, keep the source recoverable, transfer the selected
history, and compare the required inventory and metadata. Restore representative
content into owned scratch when restore validation is in scope and compare it with
known source content. Test continued writes only if the requested migration includes
that claim and a new snapshot is authorized.

For verification-only, perform the requested read/check operations; do not create
snapshots, initialize, repair, prune or change retention. A restore writes local
output and must fit the agreed verification scope.

Report transferred and verified scope separately, including changed identities,
missing history and unrun restore/write checks. Keep source and recovery material
until their retirement is authorized. A completed copy alone does not prove a
usable backup. Redact credentials and clean only owned verification output.
