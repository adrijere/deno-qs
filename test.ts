import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { qs } from "./mod.ts";

Deno.test("Parse fonction on string", function () {
  assertEquals(qs.parse("a=c"), { a: "c" });
});

Deno.test("Parse fonction on string", function () {
  assertEquals(qs.parse("a=c=b"), { a: "c=b" });
});

Deno.test("Parse fonction on string with specific equalizer", function () {
  assertEquals(qs.parse("a=>c", { eq: "=>" }), { a: "c" });
});

Deno.test("Parse fonction on long string", function () {
  assertEquals(qs.parse("a=c&foo=bar"), { a: "c", foo: "bar" });
});

Deno.test("Parse fonction on long string with specific separator", function () {
  assertEquals(qs.parse("a=c|foo=bar", { sep: "|" }), { a: "c", foo: "bar" });
});

Deno.test("URL percent-encoding on the given string", function () {
  assertEquals(qs.escape("a=c"), "a%3Dc");
});

Deno.test("URL removing percent-encoding on the given string", function () {
  assertEquals(qs.unescape("a%3Dc"), "a=c");
});
