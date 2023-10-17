import { ChildRecord } from "../records/child.record";

let child: ChildRecord;

beforeAll(async () => {
  child = await ChildRecord.getOne("5555");
});

jest.spyOn(ChildRecord, "getOne").mockImplementation(async (id: string) => {
  return new ChildRecord({
    id,
    name: "testowy",
    giftId: "123",
  });
});

jest.spyOn(ChildRecord.prototype, "update").mockImplementation(async () => {});

test("test", async () => {
  expect(child).toBeDefined();
  expect(child.id).toEqual("77777777");
});

test("test", async () => {
  await child.update();
});
