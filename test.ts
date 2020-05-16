import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { qs } from "./mod.ts";

Deno.test("Parse fonction on string", function () {
  assertEquals(qs.parse("a=c"), { a: "c" });
});

Deno.test("Parse fonction on long string", function () {
  assertEquals(qs.parse("a=c&foo=bar"), { a: "c", foo: "bar" });
});
