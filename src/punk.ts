import {
 
  PunkTransfer as PunkTransferEvent,
 
} from "../generated/punk/punk"
import {
 
  PunkTransfer,
 
} from "../generated/schema"


export function handlePunkTransfer(event: PunkTransferEvent): void {
  let entity = new PunkTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.punkIndex = event.params.punkIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

