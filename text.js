const title = [
  { id: 1, title: "메모1" },
  { id: 2, title: "메모12" },
  { id: 3, title: "메모123" },
  { id: 4, title: "메모155" },
];

const body = [
  { id: 1, body: "내용1", recent: "2021 - 07 - 04" },
  { id: 2, body: "내요요요용11212121212", recent: "2021 - 07 - 05" },
  {
    id: 3,
    body: "ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ",
    recent: "2021 - 08 - 04",
  },
  {
    id: 4,
    body: "ㅋㅇㅊㅍㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴ",
    recent: "2021 - 05 - 04",
  },
];

export const getText = async () =>
  new Promise((resolve) => setTimeout(() => resolve(title), 500));

export const getTextById = async (id) =>
  new Promise((resolve) => {
    const details = body.find((s) => s.id === id);
    return setTimeout(() => resolve(details), 500);
  });
