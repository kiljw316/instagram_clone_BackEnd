export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toHexString();
  });
}

export function toJsonVirtuals(schema) {
  schema.set("toJSON", {
    virtuals: true,
  });
}
