// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CreatedSplits extends ethereum.Event {
  get params(): CreatedSplits__Params {
    return new CreatedSplits__Params(this);
  }
}

export class CreatedSplits__Params {
  _event: CreatedSplits;

  constructor(event: CreatedSplits) {
    this._event = event;
  }

  get userId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get receiversHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class NewAdminProposed extends ethereum.Event {
  get params(): NewAdminProposed__Params {
    return new NewAdminProposed__Params(this);
  }
}

export class NewAdminProposed__Params {
  _event: NewAdminProposed;

  constructor(event: NewAdminProposed) {
    this._event = event;
  }

  get currentAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PauserGranted extends ethereum.Event {
  get params(): PauserGranted__Params {
    return new PauserGranted__Params(this);
  }
}

export class PauserGranted__Params {
  _event: PauserGranted;

  constructor(event: PauserGranted) {
    this._event = event;
  }

  get pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get admin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PauserRevoked extends ethereum.Event {
  get params(): PauserRevoked__Params {
    return new PauserRevoked__Params(this);
  }
}

export class PauserRevoked__Params {
  _event: PauserRevoked;

  constructor(event: PauserRevoked) {
    this._event = event;
  }

  get pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get admin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get pauser(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ImmutableSplitsDriver__createSplitsInputReceiversStruct extends ethereum.Tuple {
  get userId(): BigInt {
    return this[0].toBigInt();
  }

  get weight(): BigInt {
    return this[1].toBigInt();
  }
}

export class ImmutableSplitsDriver__createSplitsInputUserMetadataStruct extends ethereum.Tuple {
  get key(): Bytes {
    return this[0].toBytes();
  }

  get value(): Bytes {
    return this[1].toBytes();
  }
}

export class ImmutableSplitsDriver extends ethereum.SmartContract {
  static bind(address: Address): ImmutableSplitsDriver {
    return new ImmutableSplitsDriver("ImmutableSplitsDriver", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allPausers(): Array<Address> {
    let result = super.call("allPausers", "allPausers():(address[])", []);

    return result[0].toAddressArray();
  }

  try_allPausers(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("allPausers", "allPausers():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  createSplits(
    receivers: Array<ImmutableSplitsDriver__createSplitsInputReceiversStruct>,
    userMetadata: Array<
      ImmutableSplitsDriver__createSplitsInputUserMetadataStruct
    >
  ): BigInt {
    let result = super.call(
      "createSplits",
      "createSplits((uint256,uint32)[],(bytes32,bytes)[]):(uint256)",
      [
        ethereum.Value.fromTupleArray(receivers),
        ethereum.Value.fromTupleArray(userMetadata)
      ]
    );

    return result[0].toBigInt();
  }

  try_createSplits(
    receivers: Array<ImmutableSplitsDriver__createSplitsInputReceiversStruct>,
    userMetadata: Array<
      ImmutableSplitsDriver__createSplitsInputUserMetadataStruct
    >
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createSplits",
      "createSplits((uint256,uint32)[],(bytes32,bytes)[]):(uint256)",
      [
        ethereum.Value.fromTupleArray(receivers),
        ethereum.Value.fromTupleArray(userMetadata)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  drips(): Address {
    let result = super.call("drips", "drips():(address)", []);

    return result[0].toAddress();
  }

  try_drips(): ethereum.CallResult<Address> {
    let result = super.tryCall("drips", "drips():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  driverId(): BigInt {
    let result = super.call("driverId", "driverId():(uint32)", []);

    return result[0].toBigInt();
  }

  try_driverId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("driverId", "driverId():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPaused(): boolean {
    let result = super.call("isPaused", "isPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPauser(pauser: Address): boolean {
    let result = super.call("isPauser", "isPauser(address):(bool)", [
      ethereum.Value.fromAddress(pauser)
    ]);

    return result[0].toBoolean();
  }

  try_isPauser(pauser: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPauser", "isPauser(address):(bool)", [
      ethereum.Value.fromAddress(pauser)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nextUserId(): BigInt {
    let result = super.call("nextUserId", "nextUserId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextUserId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextUserId", "nextUserId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposedAdmin(): Address {
    let result = super.call("proposedAdmin", "proposedAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_proposedAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "proposedAdmin",
      "proposedAdmin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  totalSplitsWeight(): BigInt {
    let result = super.call(
      "totalSplitsWeight",
      "totalSplitsWeight():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalSplitsWeight(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSplitsWeight",
      "totalSplitsWeight():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _drips(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _driverId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptAdminCall extends ethereum.Call {
  get inputs(): AcceptAdminCall__Inputs {
    return new AcceptAdminCall__Inputs(this);
  }

  get outputs(): AcceptAdminCall__Outputs {
    return new AcceptAdminCall__Outputs(this);
  }
}

export class AcceptAdminCall__Inputs {
  _call: AcceptAdminCall;

  constructor(call: AcceptAdminCall) {
    this._call = call;
  }
}

export class AcceptAdminCall__Outputs {
  _call: AcceptAdminCall;

  constructor(call: AcceptAdminCall) {
    this._call = call;
  }
}

export class CreateSplitsCall extends ethereum.Call {
  get inputs(): CreateSplitsCall__Inputs {
    return new CreateSplitsCall__Inputs(this);
  }

  get outputs(): CreateSplitsCall__Outputs {
    return new CreateSplitsCall__Outputs(this);
  }
}

export class CreateSplitsCall__Inputs {
  _call: CreateSplitsCall;

  constructor(call: CreateSplitsCall) {
    this._call = call;
  }

  get receivers(): Array<CreateSplitsCallReceiversStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      CreateSplitsCallReceiversStruct
    >();
  }

  get userMetadata(): Array<CreateSplitsCallUserMetadataStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      CreateSplitsCallUserMetadataStruct
    >();
  }
}

export class CreateSplitsCall__Outputs {
  _call: CreateSplitsCall;

  constructor(call: CreateSplitsCall) {
    this._call = call;
  }

  get userId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateSplitsCallReceiversStruct extends ethereum.Tuple {
  get userId(): BigInt {
    return this[0].toBigInt();
  }

  get weight(): BigInt {
    return this[1].toBigInt();
  }
}

export class CreateSplitsCallUserMetadataStruct extends ethereum.Tuple {
  get key(): Bytes {
    return this[0].toBytes();
  }

  get value(): Bytes {
    return this[1].toBytes();
  }
}

export class GrantPauserCall extends ethereum.Call {
  get inputs(): GrantPauserCall__Inputs {
    return new GrantPauserCall__Inputs(this);
  }

  get outputs(): GrantPauserCall__Outputs {
    return new GrantPauserCall__Outputs(this);
  }
}

export class GrantPauserCall__Inputs {
  _call: GrantPauserCall;

  constructor(call: GrantPauserCall) {
    this._call = call;
  }

  get pauser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GrantPauserCall__Outputs {
  _call: GrantPauserCall;

  constructor(call: GrantPauserCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class ProposeNewAdminCall extends ethereum.Call {
  get inputs(): ProposeNewAdminCall__Inputs {
    return new ProposeNewAdminCall__Inputs(this);
  }

  get outputs(): ProposeNewAdminCall__Outputs {
    return new ProposeNewAdminCall__Outputs(this);
  }
}

export class ProposeNewAdminCall__Inputs {
  _call: ProposeNewAdminCall;

  constructor(call: ProposeNewAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProposeNewAdminCall__Outputs {
  _call: ProposeNewAdminCall;

  constructor(call: ProposeNewAdminCall) {
    this._call = call;
  }
}

export class RenounceAdminCall extends ethereum.Call {
  get inputs(): RenounceAdminCall__Inputs {
    return new RenounceAdminCall__Inputs(this);
  }

  get outputs(): RenounceAdminCall__Outputs {
    return new RenounceAdminCall__Outputs(this);
  }
}

export class RenounceAdminCall__Inputs {
  _call: RenounceAdminCall;

  constructor(call: RenounceAdminCall) {
    this._call = call;
  }
}

export class RenounceAdminCall__Outputs {
  _call: RenounceAdminCall;

  constructor(call: RenounceAdminCall) {
    this._call = call;
  }
}

export class RevokePauserCall extends ethereum.Call {
  get inputs(): RevokePauserCall__Inputs {
    return new RevokePauserCall__Inputs(this);
  }

  get outputs(): RevokePauserCall__Outputs {
    return new RevokePauserCall__Outputs(this);
  }
}

export class RevokePauserCall__Inputs {
  _call: RevokePauserCall;

  constructor(call: RevokePauserCall) {
    this._call = call;
  }

  get pauser(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokePauserCall__Outputs {
  _call: RevokePauserCall;

  constructor(call: RevokePauserCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
