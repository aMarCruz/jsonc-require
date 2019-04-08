declare module '*.json' {
  type JsonValue = string | number | boolean | null
  type JsonArray = Array<object | JsonValue | any[]>
  type JsonObject = Record<string, object | JsonArray | JsonValue>

  const json: Record<string, JsonObject | JsonArray>
}

export = {}
