# Cost and scale

Use this lens only to decide what computational and operational cost is acceptable
as workload size, concurrency, and deployment scale change. Resource ownership and
recovery belong to resources; numerical conditioning to mathematics and numerics.

## Workload and budget

- Name representative and limiting workloads, concurrency, platform, and latency
  or throughput expectations before selecting an optimization.
- Account for asymptotic work, peak and retained memory, allocations, copies, data
  passes, serialization, I/O volume, synchronization, and queue growth where they
  can change the design.
- Bound admission and backpressure at the owner that can refuse or defer work.
  Concurrency is not a substitute for a capacity model.
- Compute reusable expensive intermediates once, but retain or cache them only
  with a repeated consumer, measured benefit, bounded lifetime, and invalidation
  rule.
- Prefer streaming, batching, sparse, zero-copy, or local mutation only when they
  preserve domain and failure semantics and improve the relevant measured cost.

## Evidence

- Establish a baseline with representative data and a reproducible command before
  claiming improvement. Record environment, warmup, repetitions, result, variance,
  and important resource limits.
- Use profiles or counters to locate the owned cost. Big-O reasoning bounds growth
  but does not replace measurement of constants, allocation, or I/O.
- State the accepted tradeoff. Reject an optimization whose semantic, recovery,
  portability, or maintenance cost exceeds the approved benefit.

## Decisions to close

1. Which workload and resource is limiting?
2. Which owner creates the cost, applies backpressure, and observes the result?
3. What budget or comparison determines acceptance?
4. Does the proposed representation avoid work or merely move or hide it?
5. Which scale change reopens the decision?

Hard gate: performance claims have a workload, budget, baseline, reproducible
measurement, and semantic equivalence boundary; unbounded queues, caches, copies,
or retained intermediates have an explicit owner and refusal or invalidation rule.
