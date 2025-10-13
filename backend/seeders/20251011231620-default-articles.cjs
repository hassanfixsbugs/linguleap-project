'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();

    const arabicSummary = `يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق انتصار، وإذا لم يقصفها تكون إسرائيل قد دخلت حربا عبثية أخرى وأشد خطورة من سابقاتها كلها.
يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق`;

    const defaultArticles = [
      {
        source: "Al Jazeera",
        imageUrl: "/AlJazzera.png",
        categoryimg: "/politics.png",
        totaltime: "5 min",
        title: "جدعون ليفي: إسرائيل ليست أسدًا صاعدًا وإنما هي أسد مريض",
        summary: arabicSummary,
        content: arabicSummary,
        category: "Politics",
        difficulty: "Intermediate",
        createdAt: now,
        updatedAt: now
      },
      {
        source: "Al Jazeera",
        imageUrl: "/AlJazzera.png",
        categoryimg: "/politics.png",
        totaltime: "6 min",
        title: "جدعون ليفي: إسرائيل ليست أسدًا صاعدًا وإنما هي أسد مريض",
        summary: arabicSummary,
        content: arabicSummary,
        category: "Politics",
        difficulty: "Intermediate",
        createdAt: now,
        updatedAt: now
      },
      {
        source: "Al Jazeera",
        imageUrl: "/AlJazzera.png",
        categoryimg: "/politics.png",
        totaltime: "4 min",
        title: "جدعون ليفي: إسرائيل ليست أسدًا صاعدًا وإنما هي أسد مريض",
        summary: arabicSummary,
        content: arabicSummary,
        category: "Politics",
        difficulty: "Intermediate",
        createdAt: now,
        updatedAt: now
      },
      {
        source: "Al Jazeera",
        imageUrl: "/AlJazzera.png",
        categoryimg: "/politics.png",
        totaltime: "7 min",
        title: "جدعون ليفي: إسرائيل ليست أسدًا صاعدًا وإنما هي أسد مريض",
        summary: arabicSummary,
        content: arabicSummary,
       category: "Politics",
        difficulty: "Intermediate",
        createdAt: now,
        updatedAt: now
      }
    ];

    await queryInterface.bulkInsert('articles', defaultArticles, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('articles', null, {});
  }
};
