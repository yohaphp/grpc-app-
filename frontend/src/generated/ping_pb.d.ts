import * as jspb from 'google-protobuf'



export class PingRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    message: string,
  }
}

export class PingResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    message: string,
  }
}

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Timestamp;

  getNanos(): number;
  setNanos(value: number): Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class PingRequestWithTimestamp extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingRequestWithTimestamp;

  getTimestamp(): Timestamp | undefined;
  setTimestamp(value?: Timestamp): PingRequestWithTimestamp;
  hasTimestamp(): boolean;
  clearTimestamp(): PingRequestWithTimestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequestWithTimestamp.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequestWithTimestamp): PingRequestWithTimestamp.AsObject;
  static serializeBinaryToWriter(message: PingRequestWithTimestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequestWithTimestamp;
  static deserializeBinaryFromReader(message: PingRequestWithTimestamp, reader: jspb.BinaryReader): PingRequestWithTimestamp;
}

export namespace PingRequestWithTimestamp {
  export type AsObject = {
    message: string,
    timestamp?: Timestamp.AsObject,
  }
}

