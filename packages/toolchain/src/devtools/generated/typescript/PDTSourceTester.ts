// @generated by protobuf-ts 2.8.3 with parameter client_grpc1
// @generated from protobuf file "PDTSourceTester.proto" (syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc"
import type { BinaryWriteOptions } from "@protobuf-ts/runtime"
import type { IBinaryWriter } from "@protobuf-ts/runtime"
import { WireType } from "@protobuf-ts/runtime"
import type { BinaryReadOptions } from "@protobuf-ts/runtime"
import type { IBinaryReader } from "@protobuf-ts/runtime"
import { UnknownFieldHandler } from "@protobuf-ts/runtime"
import type { PartialMessage } from "@protobuf-ts/runtime"
import { reflectionMergePartial } from "@protobuf-ts/runtime"
import { MESSAGE_TYPE } from "@protobuf-ts/runtime"
import { MessageType } from "@protobuf-ts/runtime"
import { Timestamp } from "./google/protobuf/timestamp"
/**
 * @generated from protobuf message SourceInstallRequest
 */
export interface SourceInstallRequest {
	/**
	 * @generated from protobuf field: string sourceId = 1;
	 */
	sourceId: string
	/**
	 * @generated from protobuf field: string repoBaseUrl = 2;
	 */
	repoBaseUrl: string
}
/**
 * @generated from protobuf message SourceInstallResponse
 */
export type SourceInstallResponse = {}
/**
 * @generated from protobuf message SearchData
 */
export interface SearchData {
	/**
	 * @generated from protobuf field: optional string query = 1;
	 */
	query?: string
	/**
	 * @generated from protobuf field: repeated string includedTags = 2;
	 */
	includedTags: string[]
	/**
	 * @generated from protobuf field: repeated string excludedTags = 3;
	 */
	excludedTags: string[]
	/**
	 * Select the item at this index
	 *
	 * @generated from protobuf field: optional string itemIndex = 4;
	 */
	itemIndex?: string
	/**
	 * Ensure that its id matches this id
	 *
	 * @generated from protobuf field: optional string itemId = 5;
	 */
	itemId?: string
}
/**
 * @generated from protobuf message TestData
 */
export interface TestData {
	/**
	 * @generated from protobuf field: optional string mangaId = 1;
	 */
	mangaId?: string
	/**
	 * @generated from protobuf field: optional string chapterId = 2;
	 */
	chapterId?: string
	/**
	 * @generated from protobuf field: optional google.protobuf.Timestamp updateTime = 3;
	 */
	updateTime?: Timestamp
	/**
	 * @generated from protobuf field: optional SearchData searchData = 4;
	 */
	searchData?: SearchData
}
/**
 * @generated from protobuf message SourceTestRequest
 */
export interface SourceTestRequest {
	/**
	 * @generated from protobuf field: string sourceId = 1;
	 */
	sourceId: string
	/**
	 * @generated from protobuf field: TestData data = 2;
	 */
	data?: TestData
}
/**
 * @generated from protobuf message SourceTestResponse
 */
export interface SourceTestResponse {
	/**
	 * @generated from protobuf field: string testCase = 1;
	 */
	testCase: string
	/**
	 * @generated from protobuf field: uint64 completeTime = 2;
	 */
	completeTime: bigint
	/**
	 * @generated from protobuf field: repeated string failures = 4;
	 */
	failures: string[]
}
// @generated message type with reflection information, may provide speed optimized methods
class SourceInstallRequest$Type extends MessageType<SourceInstallRequest> {
	constructor() {
		super("SourceInstallRequest", [
			{ no: 1, name: "sourceId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
			{
				no: 2,
				name: "repoBaseUrl",
				kind: "scalar",
				T: 9 /*ScalarType.STRING*/,
			},
		])
	}
	create(value?: PartialMessage<SourceInstallRequest>): SourceInstallRequest {
		const message = { sourceId: "", repoBaseUrl: "" }
		globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
			enumerable: false,
			value: this,
		})
		if (value !== undefined)
			reflectionMergePartial<SourceInstallRequest>(this, message, value)
		return message
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: SourceInstallRequest,
	): SourceInstallRequest {
		let message = target ?? this.create(),
			end = reader.pos + length
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag()
			switch (fieldNo) {
				case /* string sourceId */ 1:
					message.sourceId = reader.string()
					break
				case /* string repoBaseUrl */ 2:
					message.repoBaseUrl = reader.string()
					break
				default:
					let u = options.readUnknownField
					if (u === "throw")
						throw new globalThis.Error(
							`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
						)
					let d = reader.skip(wireType)
					if (u !== false)
						(u === true ? UnknownFieldHandler.onRead : u)(
							this.typeName,
							message,
							fieldNo,
							wireType,
							d,
						)
			}
		}
		return message
	}
	internalBinaryWrite(
		message: SourceInstallRequest,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		/* string sourceId = 1; */
		if (message.sourceId !== "")
			writer.tag(1, WireType.LengthDelimited).string(message.sourceId)
		/* string repoBaseUrl = 2; */
		if (message.repoBaseUrl !== "")
			writer.tag(2, WireType.LengthDelimited).string(message.repoBaseUrl)
		let u = options.writeUnknownFields
		if (u !== false)
			(u == true ? UnknownFieldHandler.onWrite : u)(
				this.typeName,
				message,
				writer,
			)
		return writer
	}
}
/**
 * @generated MessageType for protobuf message SourceInstallRequest
 */
export const SourceInstallRequest = new SourceInstallRequest$Type()
// @generated message type with reflection information, may provide speed optimized methods
class SourceInstallResponse$Type extends MessageType<SourceInstallResponse> {
	constructor() {
		super("SourceInstallResponse", [])
	}
	create(value?: PartialMessage<SourceInstallResponse>): SourceInstallResponse {
		const message = {}
		globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
			enumerable: false,
			value: this,
		})
		if (value !== undefined)
			reflectionMergePartial<SourceInstallResponse>(this, message, value)
		return message
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: SourceInstallResponse,
	): SourceInstallResponse {
		return target ?? this.create()
	}
	internalBinaryWrite(
		message: SourceInstallResponse,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		let u = options.writeUnknownFields
		if (u !== false)
			(u == true ? UnknownFieldHandler.onWrite : u)(
				this.typeName,
				message,
				writer,
			)
		return writer
	}
}
/**
 * @generated MessageType for protobuf message SourceInstallResponse
 */
export const SourceInstallResponse = new SourceInstallResponse$Type()
// @generated message type with reflection information, may provide speed optimized methods
class SearchData$Type extends MessageType<SearchData> {
	constructor() {
		super("SearchData", [
			{
				no: 1,
				name: "query",
				kind: "scalar",
				opt: true,
				T: 9 /*ScalarType.STRING*/,
			},
			{
				no: 2,
				name: "includedTags",
				kind: "scalar",
				repeat: 2 /*RepeatType.UNPACKED*/,
				T: 9 /*ScalarType.STRING*/,
			},
			{
				no: 3,
				name: "excludedTags",
				kind: "scalar",
				repeat: 2 /*RepeatType.UNPACKED*/,
				T: 9 /*ScalarType.STRING*/,
			},
			{
				no: 4,
				name: "itemIndex",
				kind: "scalar",
				opt: true,
				T: 9 /*ScalarType.STRING*/,
			},
			{
				no: 5,
				name: "itemId",
				kind: "scalar",
				opt: true,
				T: 9 /*ScalarType.STRING*/,
			},
		])
	}
	create(value?: PartialMessage<SearchData>): SearchData {
		const message = { includedTags: [], excludedTags: [] }
		globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
			enumerable: false,
			value: this,
		})
		if (value !== undefined)
			reflectionMergePartial<SearchData>(this, message, value)
		return message
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: SearchData,
	): SearchData {
		let message = target ?? this.create(),
			end = reader.pos + length
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag()
			switch (fieldNo) {
				case /* optional string query */ 1:
					message.query = reader.string()
					break
				case /* repeated string includedTags */ 2:
					message.includedTags.push(reader.string())
					break
				case /* repeated string excludedTags */ 3:
					message.excludedTags.push(reader.string())
					break
				case /* optional string itemIndex */ 4:
					message.itemIndex = reader.string()
					break
				case /* optional string itemId */ 5:
					message.itemId = reader.string()
					break
				default:
					let u = options.readUnknownField
					if (u === "throw")
						throw new globalThis.Error(
							`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
						)
					let d = reader.skip(wireType)
					if (u !== false)
						(u === true ? UnknownFieldHandler.onRead : u)(
							this.typeName,
							message,
							fieldNo,
							wireType,
							d,
						)
			}
		}
		return message
	}
	internalBinaryWrite(
		message: SearchData,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		/* optional string query = 1; */
		if (message.query !== undefined)
			writer.tag(1, WireType.LengthDelimited).string(message.query)
		/* repeated string includedTags = 2; */
		for (let i = 0; i < message.includedTags.length; i++)
			writer.tag(2, WireType.LengthDelimited).string(message.includedTags[i])
		/* repeated string excludedTags = 3; */
		for (let i = 0; i < message.excludedTags.length; i++)
			writer.tag(3, WireType.LengthDelimited).string(message.excludedTags[i])
		/* optional string itemIndex = 4; */
		if (message.itemIndex !== undefined)
			writer.tag(4, WireType.LengthDelimited).string(message.itemIndex)
		/* optional string itemId = 5; */
		if (message.itemId !== undefined)
			writer.tag(5, WireType.LengthDelimited).string(message.itemId)
		let u = options.writeUnknownFields
		if (u !== false)
			(u == true ? UnknownFieldHandler.onWrite : u)(
				this.typeName,
				message,
				writer,
			)
		return writer
	}
}
/**
 * @generated MessageType for protobuf message SearchData
 */
export const SearchData = new SearchData$Type()
// @generated message type with reflection information, may provide speed optimized methods
class TestData$Type extends MessageType<TestData> {
	constructor() {
		super("TestData", [
			{
				no: 1,
				name: "mangaId",
				kind: "scalar",
				opt: true,
				T: 9 /*ScalarType.STRING*/,
			},
			{
				no: 2,
				name: "chapterId",
				kind: "scalar",
				opt: true,
				T: 9 /*ScalarType.STRING*/,
			},
			{ no: 3, name: "updateTime", kind: "message", T: () => Timestamp },
			{ no: 4, name: "searchData", kind: "message", T: () => SearchData },
		])
	}
	create(value?: PartialMessage<TestData>): TestData {
		const message = {}
		globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
			enumerable: false,
			value: this,
		})
		if (value !== undefined)
			reflectionMergePartial<TestData>(this, message, value)
		return message
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: TestData,
	): TestData {
		let message = target ?? this.create(),
			end = reader.pos + length
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag()
			switch (fieldNo) {
				case /* optional string mangaId */ 1:
					message.mangaId = reader.string()
					break
				case /* optional string chapterId */ 2:
					message.chapterId = reader.string()
					break
				case /* optional google.protobuf.Timestamp updateTime */ 3:
					message.updateTime = Timestamp.internalBinaryRead(
						reader,
						reader.uint32(),
						options,
						message.updateTime,
					)
					break
				case /* optional SearchData searchData */ 4:
					message.searchData = SearchData.internalBinaryRead(
						reader,
						reader.uint32(),
						options,
						message.searchData,
					)
					break
				default:
					let u = options.readUnknownField
					if (u === "throw")
						throw new globalThis.Error(
							`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
						)
					let d = reader.skip(wireType)
					if (u !== false)
						(u === true ? UnknownFieldHandler.onRead : u)(
							this.typeName,
							message,
							fieldNo,
							wireType,
							d,
						)
			}
		}
		return message
	}
	internalBinaryWrite(
		message: TestData,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		/* optional string mangaId = 1; */
		if (message.mangaId !== undefined)
			writer.tag(1, WireType.LengthDelimited).string(message.mangaId)
		/* optional string chapterId = 2; */
		if (message.chapterId !== undefined)
			writer.tag(2, WireType.LengthDelimited).string(message.chapterId)
		/* optional google.protobuf.Timestamp updateTime = 3; */
		if (message.updateTime)
			Timestamp.internalBinaryWrite(
				message.updateTime,
				writer.tag(3, WireType.LengthDelimited).fork(),
				options,
			).join()
		/* optional SearchData searchData = 4; */
		if (message.searchData)
			SearchData.internalBinaryWrite(
				message.searchData,
				writer.tag(4, WireType.LengthDelimited).fork(),
				options,
			).join()
		let u = options.writeUnknownFields
		if (u !== false)
			(u == true ? UnknownFieldHandler.onWrite : u)(
				this.typeName,
				message,
				writer,
			)
		return writer
	}
}
/**
 * @generated MessageType for protobuf message TestData
 */
export const TestData = new TestData$Type()
// @generated message type with reflection information, may provide speed optimized methods
class SourceTestRequest$Type extends MessageType<SourceTestRequest> {
	constructor() {
		super("SourceTestRequest", [
			{ no: 1, name: "sourceId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
			{ no: 2, name: "data", kind: "message", T: () => TestData },
		])
	}
	create(value?: PartialMessage<SourceTestRequest>): SourceTestRequest {
		const message = { sourceId: "" }
		globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
			enumerable: false,
			value: this,
		})
		if (value !== undefined)
			reflectionMergePartial<SourceTestRequest>(this, message, value)
		return message
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: SourceTestRequest,
	): SourceTestRequest {
		let message = target ?? this.create(),
			end = reader.pos + length
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag()
			switch (fieldNo) {
				case /* string sourceId */ 1:
					message.sourceId = reader.string()
					break
				case /* TestData data */ 2:
					message.data = TestData.internalBinaryRead(
						reader,
						reader.uint32(),
						options,
						message.data,
					)
					break
				default:
					let u = options.readUnknownField
					if (u === "throw")
						throw new globalThis.Error(
							`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
						)
					let d = reader.skip(wireType)
					if (u !== false)
						(u === true ? UnknownFieldHandler.onRead : u)(
							this.typeName,
							message,
							fieldNo,
							wireType,
							d,
						)
			}
		}
		return message
	}
	internalBinaryWrite(
		message: SourceTestRequest,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		/* string sourceId = 1; */
		if (message.sourceId !== "")
			writer.tag(1, WireType.LengthDelimited).string(message.sourceId)
		/* TestData data = 2; */
		if (message.data)
			TestData.internalBinaryWrite(
				message.data,
				writer.tag(2, WireType.LengthDelimited).fork(),
				options,
			).join()
		let u = options.writeUnknownFields
		if (u !== false)
			(u == true ? UnknownFieldHandler.onWrite : u)(
				this.typeName,
				message,
				writer,
			)
		return writer
	}
}
/**
 * @generated MessageType for protobuf message SourceTestRequest
 */
export const SourceTestRequest = new SourceTestRequest$Type()
// @generated message type with reflection information, may provide speed optimized methods
class SourceTestResponse$Type extends MessageType<SourceTestResponse> {
	constructor() {
		super("SourceTestResponse", [
			{ no: 1, name: "testCase", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
			{
				no: 2,
				name: "completeTime",
				kind: "scalar",
				T: 4 /*ScalarType.UINT64*/,
				L: 0 /*LongType.BIGINT*/,
			},
			{
				no: 4,
				name: "failures",
				kind: "scalar",
				repeat: 2 /*RepeatType.UNPACKED*/,
				T: 9 /*ScalarType.STRING*/,
			},
		])
	}
	create(value?: PartialMessage<SourceTestResponse>): SourceTestResponse {
		const message = { testCase: "", completeTime: 0n, failures: [] }
		globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
			enumerable: false,
			value: this,
		})
		if (value !== undefined)
			reflectionMergePartial<SourceTestResponse>(this, message, value)
		return message
	}
	internalBinaryRead(
		reader: IBinaryReader,
		length: number,
		options: BinaryReadOptions,
		target?: SourceTestResponse,
	): SourceTestResponse {
		let message = target ?? this.create(),
			end = reader.pos + length
		while (reader.pos < end) {
			let [fieldNo, wireType] = reader.tag()
			switch (fieldNo) {
				case /* string testCase */ 1:
					message.testCase = reader.string()
					break
				case /* uint64 completeTime */ 2:
					message.completeTime = reader.uint64().toBigInt()
					break
				case /* repeated string failures */ 4:
					message.failures.push(reader.string())
					break
				default:
					let u = options.readUnknownField
					if (u === "throw")
						throw new globalThis.Error(
							`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
						)
					let d = reader.skip(wireType)
					if (u !== false)
						(u === true ? UnknownFieldHandler.onRead : u)(
							this.typeName,
							message,
							fieldNo,
							wireType,
							d,
						)
			}
		}
		return message
	}
	internalBinaryWrite(
		message: SourceTestResponse,
		writer: IBinaryWriter,
		options: BinaryWriteOptions,
	): IBinaryWriter {
		/* string testCase = 1; */
		if (message.testCase !== "")
			writer.tag(1, WireType.LengthDelimited).string(message.testCase)
		/* uint64 completeTime = 2; */
		if (message.completeTime !== 0n)
			writer.tag(2, WireType.Varint).uint64(message.completeTime)
		/* repeated string failures = 4; */
		for (let i = 0; i < message.failures.length; i++)
			writer.tag(4, WireType.LengthDelimited).string(message.failures[i])
		let u = options.writeUnknownFields
		if (u !== false)
			(u == true ? UnknownFieldHandler.onWrite : u)(
				this.typeName,
				message,
				writer,
			)
		return writer
	}
}
/**
 * @generated MessageType for protobuf message SourceTestResponse
 */
export const SourceTestResponse = new SourceTestResponse$Type()
/**
 * @generated ServiceType for protobuf service PaperbackSourceTester
 */
export const PaperbackSourceTester = new ServiceType("PaperbackSourceTester", [
	{
		name: "installSource",
		options: {},
		I: SourceInstallRequest,
		O: SourceInstallResponse,
	},
	{
		name: "testSource",
		serverStreaming: true,
		options: {},
		I: SourceTestRequest,
		O: SourceTestResponse,
	},
])
