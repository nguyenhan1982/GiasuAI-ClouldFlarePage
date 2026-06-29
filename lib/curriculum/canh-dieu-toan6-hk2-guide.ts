// ============================================================
// HƯỚNG DẪN CHI TIẾT - TOÁN 6 HK2 - CÁNH DIỀU
// Dữ liệu trích xuất từ Giáo án chính thức
// ============================================================

import { LessonExample, LessonExercise, QuizQuestion, LessonGuide } from './canh-dieu-toan6-hk1-guide';

// ============================================================
// CHƯƠNG V: PHÂN SỐ VÀ SỐ THẬP PHÂN (Phần 1 - Phân số)
// ============================================================

const CD_G6_C5_B1: LessonGuide = {
  bai_id: "CD_G6_C5_B1",
  chuong: 5,
  so_tiet: 3,
  tieu_de: "Chương V - Bài 1: Phân số với tử và mẫu là số nguyên",
  muc_tieu: [
    "Nắm được khái niệm phân số với tử số và mẫu số là số nguyên.",
    "Biết đọc và viết các phân số với tử và mẫu số là số nguyên.",
    "Nắm được khái niệm hai phân số bằng nhau và cách chứng minh.",
    "Áp dụng được tính chất cơ bản của phân số để rút gọn và quy đồng mẫu nhiều phân số."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Khái niệm phân số",
      noi_dung: [
        "Kết quả của phép chia số nguyên a cho số nguyên b khác 0 có thể viết dưới dạng a/b. Ta gọi a/b là phân số.",
        "a là tử số (tử), b là mẫu số (mẫu).",
        "Mọi số nguyên a có thể viết ở dạng phân số là a/1."
      ]
    },
    {
      tieu_de: "2. Hai phân số bằng nhau",
      noi_dung: [
        "Hai phân số a/b và c/d được gọi là bằng nhau nếu chúng cùng biểu diễn một giá trị.",
        "Quy tắc bằng nhau: a/b = c/d nếu a . d = b . c. Ngược lại, nếu a . d = b . c thì a/b = c/d."
      ]
    },
    {
      tieu_de: "3. Tính chất cơ bản của phân số",
      noi_dung: [
        "Nếu ta nhân cả tử và mẫu của một phân số với cùng một số nguyên khác 0 thì ta được một phân số bằng phân số đã cho: a/b = (a . m)/(b . m) với m thuộc Z, m ≠ 0.",
        "Nếu ta chia cả tử và mẫu của một phân số cho cùng một ước chung của chúng thì ta được một phân số bằng phân số đã cho: a/b = (a : n)/(b : n) với n thuộc ƯC(a, b).",
        "Mỗi phân số đều đưa được về một phân số bằng nó và có mẫu là số dương."
      ]
    },
    {
      tieu_de: "4. Rút gọn về phân số tối giản và quy đồng mẫu",
      noi_dung: [
        "Muán đưa một phân số về phân số tối giản ta chia cả tử và mẫu của phân số cho ƯCLN của chúng (sau khi bỏ đi dấu trừ nếu có).",
        "Quy đồng mẫu nhiều phân số: 1. Đưa về mẫu dương, tìm BCNN của các mẫu làm mẫu chung. 2. Tìm thừa số phụ của mỗi mẫu. 3. Nhân cả tử và mẫu của mỗi phân số với thừa số phụ tương ứng."
      ]
    }
  ],
  cong_thuc: [
    "a/b = c/d <=> a . d = b . c (b, d ≠ 0)",
    "a/b = (a . m)/(b . m) (m thuộc Z, m ≠ 0)",
    "a/b = (a : n)/(b : n) (n thuộc ƯC(a, b))",
    "a/b = -a/-b và -a/b = a/-b"
  ],
  vi_du: [
    {
      de_bai: "a) Giải thích vì sao hai phân số -3/4 và 6/-8 bằng nhau.\nb) Rút gọn phân số -28/42 về phân số tối giản.\nc) Quy đồng mẫu các phân số: -5/14 và 8/21.",
      loi_giai: "a) Ta có: (-3) . (-8) = 24 và 4 . 6 = 24. Vì (-3) . (-8) = 4 . 6 nên -3/4 = 6/-8.\nb) ƯCLN(28, 42) = 14. Chia cả tử và mẫu của -28/42 cho 14 ta được: (-28 : 14) / (42 : 14) = -2/3.\nc) BCNN(14, 21) = 42. Thừa số phụ: 42 : 14 = 3; 42 : 21 = 2.\nNhân cả tử và mẫu với thừa số phụ tương ứng:\n-5/14 = (-5 × 3) / (14 × 3) = -15/42.\n8/21 = (8 × 2) / (21 × 2) = 16/42."
    }
  ],
  luyen_tap: [
    {
      de_bai: "Tìm số nguyên x biết: a) x/4 = 5/20; b) (x + 7)/15 = -2/3.",
      dap_an: "a) Vì x/4 = 5/20 nên x × 20 = 4 × 5 => 20x = 20 => x = 1.\nb) Vì (x + 7)/15 = -2/3 nên (x + 7) × 3 = 15 × (-2) => 3(x + 7) = -30 => x + 7 = -10 => x = -17."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Trong các cách viết sau đây, cách viết nào cho ta một phân số?",
      dap_an: [
        "1.5 / 3",
        "-4 / 0",
        "-3 / 7",
        "2 / 1.8"
      ],
      dap_an_dung: 2,
      giai_thich: "Phân số phải có tử và mẫu là các số nguyên, mẫu số khác 0. Do đó -3/7 là phân số."
    },
    {
      cau_hoi: "Phân số nào dưới đây bằng với phân số -2/3?",
      dap_an: [
        "4/6",
        "-4/6",
        "6/-4",
        "-2/-3"
      ],
      dap_an_dung: 1,
      giai_thich: "Ta có: -4/6 = (-4 : 2) / (6 : 2) = -2/3. Hoặc (-2) × 6 = 3 × (-4) = -12."
    },
    {
      cau_hoi: "Khi rút gọn phân số -18/45 về phân số tối giản, ta được kết quả là:",
      dap_an: [
        "-2/5",
        "2/-5",
        "-9/5",
        "-2/9"
      ],
      dap_an_dung: 0,
      giai_thich: "ƯCLN(18, 45) = 9. Chia cả tử và mẫu của -18/45 cho 9 ta được: -2/5."
    }
  ],
  ghi_nho: [
    "Hai phân số a/b và c/d bằng nhau nếu tích chéo a . d bằng b . c.",
    "Có thể viết mọi phân số dưới dạng phân số có mẫu là số dương.",
    "Trước khi quy đồng mẫu nhiều phân số, ta nên đưa các phân số về mẫu dương và rút gọn đến tối giản."
  ]
};

const CD_G6_C5_B2: LessonGuide = {
  bai_id: "CD_G6_C5_B2",
  chuong: 5,
  so_tiet: 2,
  tieu_de: "Chương V - Bài 2: So sánh các phân số. Hỗn số dương",
  muc_tieu: [
    "Biết dùng kí hiệu <, > để thể hiện quan hệ thứ tự của hai phân số.",
    "Nắm được khái niệm phân số dương, phân số âm.",
    "Biết so sánh hai phân số bằng cách quy đồng mẫu.",
    "Nắm được khái niệm hỗn số dương, biết viết một phân số lớn hơn 1 dưới dạng hỗn số và ngược lại."
  ],
  kien_thuc: [
    {
      tieu_de: "1. So sánh hai phân số cùng mẫu và khác mẫu",
      noi_dung: [
        "Trong hai phân số khác nhau luôn có một phân số nhỏ hơn phân số kia.",
        "Phân số lớn hơn 0 gọi là phân số dương. Phân số nhỏ hơn 0 gọi là phân số âm.",
        "Quy tắc so sánh: Để so sánh hai phân số không cùng mẫu, ta quy đồng mẫu hai phân số đó (về cùng một mẫu dương) rồi so sánh các tử với nhau: Phân số nào có tử lớn hơn thì phân số đó lớn hơn.",
        "Tính chất bắc cầu: Nếu a/b < c/d và c/d < e/f thì a/b < e/f."
      ]
    },
    {
      tieu_de: "2. Hỗn số dương",
      noi_dung: [
        "Viết một phân số lớn hơn 1 thành tổng của một số nguyên dương và một phân số nhỏ hơn 1 (với tử và mẫu dương) rồi viết chúng liền nhau thì được một hỗn số dương."
      ]
    }
  ],
  cong_thuc: [
    "q (r/b) = (q × b + r) / b (với q, r, b là các số nguyên dương và r < b)"
  ],
  vi_du: [
    {
      de_bai: "a) So sánh hai phân số: -7/12 và -11/18.\nb) Viết phân số 11/4 dưới dạng hỗn số dương.\nc) Viết hỗn số 2 (3/5) dưới dạng phân số.",
      loi_giai: "a) Quy đồng mẫu hai phân số về cùng mẫu dương chung là BCNN(12, 18) = 36:\n-7/12 = -21/36; -11/18 = -22/36.\nVì -21 > -22 nên -21/36 > -22/36. Vậy -7/12 > -11/18.\nb) Thực hiện phép chia: 11 ÷ 4 = 2 (dư 3). Thương là 2, số dư là 3. Vậy 11/4 = 2 + 3/4 = 2 (3/4).\nc) Đổi hỗn số 2 (3/5) về phân số: (2 × 5 + 3) / 5 = 13/5."
    }
  ],
  luyen_tap: [
    {
      de_bai: "a) So sánh hai phân số: -3/5 và -4/7.\nb) Viết các khoảng thời gian sau dưới dạng hỗn số với đơn vị là giờ: 2 giờ 15 phút, 10 giờ 20 phút.",
      dap_an: "a) Quy đồng mẫu chung là 35:\n-3/5 = -21/35; -4/7 = -20/35.\nVì -21 < -20 nên -21/35 < -20/35. Vậy -3/5 < -4/7.\nb) Đổi đơn vị sang giờ:\n- 2 giờ 15 phút = 2 + 15/60 = 2 + 1/4 = 2 (1/4) giờ.\n- 10 giờ 20 phút = 10 + 20/60 = 10 + 1/3 = 10 (1/3) giờ."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Trong các phân số sau, phân số nào là phân số dương?",
      dap_an: [
        "-2/3",
        "5/-7",
        "-4/-9",
        "0/3"
      ],
      dap_an_dung: 2,
      giai_thich: "Phân số -4/-9 = 4/9 > 0 nên là phân số dương."
    },
    {
      cau_hoi: "Sắp xếp các phân số -1/2, -5/6, -2/3 theo thứ tự tăng dần:",
      dap_an: [
        "-1/2 < -2/3 < -5/6",
        "-5/6 < -2/3 < -1/2",
        "-5/6 < -2/3 < -1/2",
        "-2/3 < -5/6 < -1/2"
      ],
      dap_an_dung: 1,
      giai_thich: "Quy đồng về mẫu chung 6: -1/2 = -3/6; -5/6; -2/3 = -4/6. Vì -5 < -4 < -3 nên -5/6 < -2/3 < -1/2."
    },
    {
      cau_hoi: "Viết hỗn số 3 (2/7) dưới dạng phân số ta được:",
      dap_an: [
        "13/7",
        "23/7",
        "6/7",
        "17/7"
      ],
      dap_an_dung: 1,
      giai_thich: "3 (2/7) = (3 × 7 + 2) / 7 = 23/7."
    }
  ],
  ghi_nho: [
    "Muốn so sánh hai phân số không cùng mẫu, ta phải quy đồng mẫu những phân số đó về cùng một mẫu số dương rồi so sánh các tử số.",
    "Hỗn số dương gồm hai phần: phần nguyên là số nguyên dương và phần phân số là phân số dương nhỏ hơn 1."
  ]
};

const CD_G6_C5_B3: LessonGuide = {
  bai_id: "CD_G6_C5_B3",
  chuong: 5,
  so_tiet: 3,
  tieu_de: "Chương V - Bài 3: Phép cộng và phép trừ phân số",
  muc_tieu: [
    "Biết cộng, trừ hai phân số cùng mẫu và không cùng mẫu.",
    "Biết các tính chất của phép cộng phân số: giao hoán, kết hợp, cộng với số 0.",
    "Hiểu được khái niệm số đối của một phân số và biết tìm số đối của phân số cho trước.",
    "Hiểu rõ mối quan hệ giữa phép trừ phân số và phép cộng với số đối.",
    "Biết sử dụng quy tắc dấu ngoặc để tính nhanh và hợp lí."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Quy tắc cộng hai phân số",
      noi_dung: [
        "Cộng hai phân số cùng mẫu: Muốn cộng hai phân số có cùng mẫu số, ta cộng các tử và giữ nguyên mẫu: a/m + b/m = (a + b)/m.",
        "Cộng hai phân số khác mẫu: Quy đồng mẫu những phân số đó rồi cộng các tử và giữ nguyên mẫu chung."
      ]
    },
    {
      tieu_de: "2. Tính chất của phép cộng phân số",
      noi_dung: [
        "Phép cộng phân số có các tính chất giao hoán, kết hợp, cộng với số 0, cộng với số đối."
      ]
    },
    {
      tieu_de: "3. Số đối của một phân số",
      noi_dung: [
        "Mỗi phân số đều có số đối sao cho tổng của chúng bằng 0. Số đối của phân số a/b kí hiệu là -a/b.",
        "Ta có: a/b + (-a/b) = 0 và -(a/b) = -a/b = a/-b."
      ]
    },
    {
      tieu_de: "4. Quy tắc trừ hai phân số",
      noi_dung: [
        "Để trừ hai phân số (cùng mẫu hay khác mẫu), ta cộng số bị trừ với số đối của số trừ: a/b - c/d = a/b + (-c/d)."
      ]
    },
    {
      tieu_de: "5. Quy tắc dấu ngoặc đối với phân số",
      noi_dung: [
        "Khi bỏ ngoặc có dấu '+' đằng trước, ta giữ nguyên dấu của các số hạng trong ngoặc.",
        "Khi bỏ ngoặc có dấu '-' đằng trước, ta phải đổi dấu của tất cả các số hạng trong ngoặc."
      ]
    }
  ],
  cong_thuc: [
    "a/m + b/m = (a + b)/m",
    "a/b + (-a/b) = 0",
    "a/b - c/d = a/b + (-c/d)"
  ],
  vi_du: [
    {
      de_bai: "a) Tính tổng: -7/9 + 5/6.\nb) Tính nhanh giá trị biểu thức: A = -5/11 + 3/7 + -6/11 + 4/7.\nc) Thực hiện phép trừ: -2/3 - 4/5.",
      loi_giai: "a) Quy đồng mẫu chung là 18:\n-7/9 + 5/6 = -14/18 + 15/18 = 1/18.\nb) Sử dụng tính chất giao hoán và kết hợp:\nA = (-5/11 + -6/11) + (3/7 + 4/7) = -11/11 + 7/7 = -1 + 1 = 0.\nc) Viết phép trừ dưới dạng phép cộng với số đối:\n-2/3 - 4/5 = -2/3 + -4/5. Quy đồng mẫu chung 15:\n-10/15 + -12/15 = -22/15."
    }
  ],
  luyen_tap: [
    {
      de_bai: "a) Tính: -1/12 - 5/8.\nb) Một quý gồm 3 tháng. Coi tổng kế hoạch quý I là 1. Tháng thứ nhất đạt 1/3 kế hoạch, tháng thứ hai đạt 2/5 kế hoạch. Hỏi tháng thứ ba cần đạt bao nhiêu phần kế hoạch?",
      dap_an: "a) Quy đồng mẫu chung 24:\n-1/12 - 5/8 = -2/24 - 15/24 = -17/24.\nb) Tổng kế hoạch hai tháng đầu đạt được là: 1/3 + 2/5 = 11/15 (kế hoạch).\nSố phần kế hoạch tháng thứ ba cần đạt là: 1 - 11/15 = 4/15 (kế hoạch)."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Số đối của phân số -5/-7 là:",
      dap_an: [
        "5/7",
        "-5/7",
        "5/-7",
        "Cả B và C đều đúng"
      ],
      dap_an_dung: 3,
      giai_thich: "Phân số -5/-7 bằng 5/7. Số đối của nó là -5/7 hoặc 5/-7. Vì vậy cả B và C đều là số đối."
    },
    {
      cau_hoi: "Kết quả của phép tính 1/3 - (-2/9) là:",
      dap_an: [
        "1/9",
        "-5/9",
        "5/9",
        "-1/9"
      ],
      dap_an_dung: 2,
      giai_thich: "Phép tính: 1/3 - (-2/9) = 1/3 + 2/9 = 3/9 + 2/9 = 5/9."
    },
    {
      cau_hoi: "Khi bỏ dấu ngoặc của biểu thức A = 2/3 - (1/2 - 3/4), ta được biểu thức nào dưới đây?",
      dap_an: [
        "2/3 - 1/2 - 3/4",
        "2/3 + 1/2 - 3/4",
        "2/3 - 1/2 + 3/4",
        "2/3 + 1/2 + 3/4"
      ],
      dap_an_dung: 2,
      giai_thich: "Vì trước ngoặc có dấu trừ, khi bỏ ngoặc ta phải đổi dấu tất cả số hạng bên trong: +1/2 thành -1/2, và -3/4 thành +3/4. Kết quả là 2/3 - 1/2 + 3/4."
    }
  ],
  ghi_nho: [
    "Muốn cộng (trừ) hai phân số không cùng mẫu, trước hết ta quy đồng mẫu các phân số đó rồi cộng (trừ) các tử và giữ nguyên mẫu chung.",
    "Phép trừ phân số thực chất là phép cộng số bị trừ với số đối của số trừ.",
    "Khi bỏ dấu ngoặc, nếu trước ngoặc có dấu trừ '-' ta phải đổi dấu của mọi số hạng bên trong ngoặc."
  ]
};

const CD_G6_C5_B4: LessonGuide = {
  bai_id: "CD_G6_C5_B4",
  chuong: 5,
  so_tiet: 3,
  tieu_de: "Chương V - Bài 4: Phép nhân và phép chia phân số",
  muc_tieu: [
    "Biết và vận dụng được quy tắc nhân, chia phân số.",
    "Biết các tính chất của phép nhân phân số để tính hợp lí.",
    "Hiểu được khái niệm phân số nghịch đảo và biết tìm phân số nghịch đảo của phân số đã cho."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Quy tắc nhân phân số",
      noi_dung: [
        "Muốn nhân hai phân số, ta nhân các tử với nhau và nhân các mẫu với nhau: (a/b) . (c/d) = (a . c)/(b . d).",
        "Nhân một số nguyên với một phân số: Nhân số nguyên với tử của phân số và giữ nguyên mẫu: m . (a/b) = (m . a)/b."
      ]
    },
    {
      tieu_de: "2. Tính chất của phép nhân phân số",
      noi_dung: [
        "Phép nhân phân số có các tính chất giao hoán, kết hợp, nhân với số 1, phân phối đối với phép cộng và phép trừ."
      ]
    },
    {
      tieu_de: "3. Phân số nghịch đảo",
      noi_dung: [
        "Phân số b/a gọi là phân số nghịch đảo của phân số a/b (với a, b khác 0).",
        "Tích của một phân số với phân số nghịch đảo của nó luôn bằng 1."
      ]
    },
    {
      tieu_de: "4. Quy tắc chia phân số",
      noi_dung: [
        "Muốn chia một phân số cho một phân số khác 0, ta nhân số bị chia với phân số nghịch đảo của số chia: (a/b) : (c/d) = (a/b) . (d/c).",
        "Quy tắc chia liên quan đến số nguyên: a : (c/d) = (a . d)/c và (a/b) : c = a/(b . c)."
      ]
    }
  ],
  cong_thuc: [
    "(a/b) × (c/d) = (a × c) / (b × d)",
    "m × (a/b) = (m × a) / b",
    "(a/b) : (c/d) = (a/b) × (d/c) = (a × d) / (b × c)",
    "(a/b) × (b/a) = 1 (với a, b ≠ 0)"
  ],
  vi_du: [
    {
      de_bai: "a) Tính tích: -5/7 . 2/11.\nb) Nhân số nguyên: 8 . -3/5.\nc) Tìm phân số nghịch đảo của -4/9.\nd) Tính thương: -5/9 : -2/3.",
      loi_giai: "a) Áp dụng quy tắc nhân: -5/7 . 2/11 = (-5 × 2) / (7 × 11) = -10/77.\nb) Nhân số nguyên với tử: 8 . -3/5 = (8 × -3) / 5 = -24/5.\nc) Phân số nghịch đảo của -4/9 là 9/-4 (hay -9/4).\nd) Nhân số bị chia với phân số nghịch đảo của số chia:\n-5/9 : -2/3 = -5/9 . -3/2 = (-5 × -3) / (9 × 2) = 15/18. Rút gọn cho 3 được 5/6."
    }
  ],
  luyen_tap: [
    {
      de_bai: "a) Thực hiện phép tính: -2/5 : 3/4.\nb) Tính giá trị biểu thức bằng cách hợp lí: B = -7/13 × 5/12 + -7/13 × 7/12 + 20/13.",
      dap_an: "a) Ta có: -2/5 : 3/4 = -2/5 × 4/3 = -8/15.\nb) Áp dụng tính chất phân phối của phép nhân đối với phép cộng:\nB = -7/13 × (5/12 + 7/12) + 20/13\nB = -7/13 × 12/12 + 20/13\nB = -7/13 × 1 + 20/13 = -7/13 + 20/13 = 13/13 = 1."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Phân số nghịch đảo của phân số -3 là:",
      dap_an: [
        "3",
        "1/3",
        "-1/3",
        "3/1"
      ],
      dap_an_dung: 2,
      giai_thich: "Phân số -3 có thể viết thành -3/1. Phân số nghịch đảo của nó thu được bằng cách hoán đổi tử và mẫu: 1/-3 = -1/3."
    },
    {
      cau_hoi: "Tính tích -4/5 × 15/-8 ta được kết quả rút gọn là:",
      dap_an: [
        "-3/2",
        "3/2",
        "-60/-40",
        "6/4"
      ],
      dap_an_dung: 1,
      giai_thich: "-4/5 × 15/-8 = (-4 × 15) / (5 × -8) = -60/-40. Chia cả tử và mẫu cho -20 ta được phân số tối giản 3/2."
    },
    {
      cau_hoi: "Kết quả của phép chia -9/10 : 3/5 là:",
      dap_an: [
        "-27/50",
        "-3/2",
        "-2/3",
        "2/3"
      ],
      dap_an_dung: 1,
      giai_thich: "-9/10 : 3/5 = -9/10 × 5/3 = (-9 × 5) / (10 × 3) = -45/30. Chia cả tử và mẫu cho 15 ta được -3/2."
    }
  ],
  ghi_nho: [
    "Quy tắc nhân hai phân số: ta lấy tử nhân với tử, mẫu nhân với mẫu.",
    "Quy tắc chia hai phân số: ta lấy phân số bị chia nhân với phân số nghịch đảo của phân số chia.",
    "Tích của hai phân số nghịch đảo của nhau luôn bằng 1."
  ]
};

// ============================================================
// CHƯƠNG V: PHÂN SỐ VÀ SỐ THẬP PHÂN (Phần 2 - Số thập phân & Tỉ số)
// ============================================================

const CH5_B5: LessonGuide = {
  bai_id: "CH5_B5",
  chuong: 5,
  so_tiet: 2,
  tieu_de: "Chương V - Bài 5: Số thập phân",
  muc_tieu: [
    "Nắm được khái niệm phân số thập phân, số thập phân.",
    "Biết đọc và viết số thập phân, nhận biết số thập phân âm và số thập phân dương.",
    "Biết viết các phân số, hỗn số thành số thập phân và ngược lại.",
    "Nắm được tính chất bắc cầu và quy tắc so sánh hai số thập phân."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Khái niệm số thập phân",
      noi_dung: [
        "Phân số thập phân là phân số mà mẫu là luỹ thừa của 10 (10, 100, 1000,...) và tử là số nguyên.",
        "Mỗi phân số thập phân đều viết được dưới dạng số thập phân.",
        "Số thập phân gồm hai phần: Phần số nguyên được viết bên trái dấu phẩy; Phần thập phân được viết bên phải dấu phẩy.",
        "Mỗi số thập phân đều có số đối. Số đối của số thập phân a kí hiệu là -a."
      ]
    },
    {
      tieu_de: "2. Quy tắc so sánh hai số thập phân",
      noi_dung: [
        "Số thập phân âm luôn nhỏ hơn số thập phân dương. Mọi số thập phân dương lớn hơn 0, mọi số thập phân âm nhỏ hơn 0.",
        "So sánh hai số thập phân dương: Số nào có phần số nguyên lớn hơn thì lớn hơn. Nếu bằng nhau, so sánh từng cặp chữ số ở phần thập phân kể từ trái sang phải.",
        "So sánh hai số thập phân âm: Ta so sánh hai số đối của chúng. Số đối nào lớn hơn thì số thập phân âm tương ứng nhỏ hơn."
      ]
    }
  ],
  cong_thuc: [
    "Số đối: a + (-a) = 0 và -(-a) = a",
    "Nếu a < b và b < c thì a < c"
  ],
  vi_du: [
    {
      de_bai: "Viết các phân số thập phân -9/1000, -5/8, 77/25 dưới dạng số thập phân.",
      loi_giai: "Ta có:\n-9/1000 = -0,009\n-5/8 = (-5 × 125) / (8 × 125) = -625/1000 = -0,625\n77/25 = (77 × 4) / (25 × 4) = 308/100 = 3,08"
    },
    {
      de_bai: "Viết các số thập phân -0,125; -0,012; -4,005 dưới dạng phân số tối giản.",
      loi_giai: "Ta có:\n-0,125 = -125/1000 = -1/8\n-0,012 = -12/1000 = -3/250\n-4,005 = -4005/1000 = -801/200"
    }
  ],
  luyen_tap: [
    {
      de_bai: "Sắp xếp các số sau theo thứ tự giảm dần: 36,1; -120,341; 36,095; -120,34.",
      dap_an: "Ta so sánh các số dương với nhau: 36,1 > 36,095.\nSo sánh các số âm với nhau: bỏ dấu trừ ta có 120,34 < 120,341 nên -120,34 > -120,341.\nVì số dương luôn lớn hơn số âm nên ta có thứ tự giảm dần là: 36,1 > 36,095 > -120,34 > -120,341."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Số đối của số thập phân -12,49 là số nào?",
      dap_an: ["12,49", "-12,49", "0", "124,9"],
      dap_an_dung: 0,
      giai_thich: "Số đối của số thập phân -a là a. Do đó số đối của -12,49 là 12,49."
    },
    {
      cau_hoi: "Khẳng định nào sau đây là đúng?",
      dap_an: ["-3,15 > -3,12", "-3,15 < -3,12", "-3,15 = -3,12", "3,15 < 3,12"],
      dap_an_dung: 1,
      giai_thich: "Ta có 3,15 > 3,12. Do đó, khi so sánh hai số âm tương ứng ta đổi chiều: -3,15 < -3,12."
    }
  ],
  ghi_nho: [
    "Phân số thập phân là phân số có mẫu là lũy thừa của 10 và tử là số nguyên.",
    "Khi so sánh hai số thập phân âm, số nào có số đối lớn hơn thì số đó nhỏ hơn."
  ]
};

const CH5_B6_B7: LessonGuide = {
  bai_id: "CH5_B6_B7",
  chuong: 5,
  so_tiet: 4,
  tieu_de: "Chương V - Bài 6: Phép tính cộng, trừ, nhân, chia số thập phân",
  muc_tieu: [
    "Hiểu được cách tìm số đối của số thập phân.",
    "Biết thực hiện phép cộng, trừ, nhân, chia hai số thập phân bất kì (cùng dấu và khác dấu).",
    "Biết vận dụng các tính chất của phép tính và quy tắc dấu ngoặc.",
    "Vận dụng các phép tính số thập phân để giải quyết các bài toán thực tiễn."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Phép cộng và phép trừ số thập phân",
      noi_dung: [
        "Cộng hai số thập phân cùng dấu hoặc khác dấu thực hiện tương tự quy tắc cộng hai số nguyên.",
        "Cộng hai số thập phân âm: cộng hai số đối của chúng rồi thêm dấu trừ trước kết quả.",
        "Cộng hai số thập phân trái dấu: Lấy số lớn hơn (bỏ dấu) trừ số nhỏ hơn rồi lấy dấu của số có giá trị tuyệt đối lớn hơn.",
        "Phép trừ hai số thập phân: Muốn trừ số thập phân a cho số thập phân b, ta cộng a với số đối của b: a - b = a + (-b)."
      ]
    },
    {
      tieu_de: "2. Phép nhân số thập phân",
      noi_dung: [
        "Nhân hai số cùng dấu luôn là số dương; tích của hai số khác dấu luôn là số âm.",
        "Nhân hai số thập phân âm: ta nhân hai số đối của chúng.",
        "Nhân hai số thập phân khác dấu: ta nhân số dương với số đối của số âm rồi thêm dấu trừ trước kết quả."
      ]
    },
    {
      tieu_de: "3. Phép chia số thập phân",
      noi_dung: [
        "Chia hai số thập phân cùng dấu hoặc khác dấu tương tự quy tắc chia hai số nguyên.",
        "Chia hai số thập phân dương: Dời dấu phẩy số bị chia sang phải bấy nhiêu chữ số tương ứng với phần thập phân của số chia. Bỏ dấu phẩy ở số chia rồi chia như chia cho số nguyên.",
        "Chia hai số khác dấu: ta chia số dương cho số đối của số âm rồi thêm dấu trừ trước kết quả."
      ]
    }
  ],
  cong_thuc: [
    "a - b = a + (-b)",
    "(-a) + (-b) = -(a + b)",
    "(-a) × (-b) = a × b",
    "(-a) × b = -(a × b)",
    "(-a) ÷ (-b) = a ÷ b",
    "(-a) ÷ b = -(a ÷ b)"
  ],
  vi_du: [
    {
      de_bai: "Thực hiện phép tính sau một cách hợp lí:\nA = 89,45 + (-3,28) + 0,55 + (-6,72)",
      loi_giai: "Áp dụng tính chất giao hoán và kết hợp của phép cộng:\nA = (89,45 + 0,55) + [(-3,28) + (-6,72)]\nA = 90 + [-(3,28 + 6,72)]\nA = 90 + (-10) = 80"
    },
    {
      de_bai: "Thực hiện các phép tính sau:\na) 8,15 × (-4,26)\nb) (-17,01) ÷ (-12,15)",
      loi_giai: "a) 8,15 × (-4,26) = -(8,15 × 4,26) = -34,719\nb) (-17,01) ÷ (-12,15) = 17,01 ÷ 12,15 = 1,4"
    }
  ],
  luyen_tap: [
    {
      de_bai: "Một thửa ruộng hình chữ nhật có chiều dài 110 m, chiều rộng 78 m. Người ta cấy lúa trên thửa ruộng đó, cứ 1 ha thu hoạch được 71,5 tạ thóc. Tính số thóc thu hoạch được trên cả thửa ruộng đó (theo đơn vị tạ).",
      dap_an: "Diện tích thửa ruộng hình chữ nhật là:\n110 × 78 = 8580 (m²)\nĐổi sang đơn vị ha: 8580 m² = 0,858 ha.\nSố thóc thu hoạch được trên thửa ruộng đó là:\n0,858 × 71,5 = 61,347 (tạ)."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Kết quả của phép tính (-14,25) - (-9,2) là:",
      dap_an: ["-23,45", "-5,05", "5,05", "-23,05"],
      dap_an_dung: 1,
      giai_thich: "Ta có (-14,25) - (-9,2) = -14,25 + 9,2 = -5,05."
    },
    {
      cau_hoi: "Kết quả của phép tính (-0,4) × (-0,5) × (-0,2) là:",
      dap_an: ["0,04", "-0,04", "0,4", "-0,4"],
      dap_an_dung: 1,
      giai_thich: "Ta có: (-0,4) × (-0,5) × (-0,2) = 0,2 × (-0,2) = -0,04."
    }
  ],
  ghi_nho: [
    "Quy tắc cộng, trừ, nhân, chia số thập phân tương ứng với số nguyên.",
    "Khi chia số thập phân, dời dấu phẩy của số bị chia rồi thực hiện phép chia."
  ]
};

const CH5_B8_B9_B10: LessonGuide = {
  bai_id: "CH5_B8_B9_B10",
  chuong: 5,
  so_tiet: 7,
  tieu_de: "Chương V - Bài 7: Tỉ số và tỉ số phần trăm",
  muc_tieu: [
    "Hiểu và áp dụng quy tắc làm tròn số nguyên và số thập phân.",
    "Nắm được khái niệm tỉ số, tỉ số phần trăm.",
    "Hiểu quy tắc tìm giá trị phân số của một số cho trước.",
    "Hiểu quy tắc tìm một số khi biết giá trị phân số của nó."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Làm tròn số nguyên và số thập phân",
      noi_dung: [
        "Nếu chữ số đứng ngay sau hàng làm tròn nhỏ hơn 5 thì ta thay các chữ số đứng bên phải hàng làm tròn bằng chữ số 0 (ở phần thập phân thì bỏ đi).",
        "Nếu chữ số đứng ngay sau hàng làm tròn lớn hơn hoặc bằng 5 thì ta cộng thêm 1 vào chữ số hàng làm tròn và thay các chữ số bên phải hàng làm tròn bằng chữ số 0 (ở phần thập phân thì bỏ đi)."
      ]
    },
    {
      tieu_de: "2. Tỉ số và tỉ số phần trăm của hai số",
      noi_dung: [
        "Tỉ số của a và b (b ≠ 0) là thương trong phép chia số a cho số b, kí hiệu là a : b hoặc a/b.",
        "Tỉ số phần trăm của a và b là (a/b) × 100%."
      ]
    },
    {
      tieu_de: "3. Hai bài toán về phân số",
      noi_dung: [
        "Tìm giá trị phân số: Muốn tìm giá trị m/n của số a cho trước, ta tính a × (m/n).",
        "Tìm một số biết giá trị phân số của nó: Muốn tìm một số biết m/n của nó bằng a, ta tính a ÷ (m/n)."
      ]
    }
  ],
  cong_thuc: [
    "Tỉ số: a : b hoặc a/b",
    "Tỉ số phần trăm: (a/b) × 100%",
    "Tìm giá trị phân số: a × (m/n)",
    "Tìm một số biết giá trị phân số: a ÷ (m/n)"
  ],
  vi_du: [
    {
      de_bai: "a) Làm tròn số -23,567 đến hàng phần mười.\nb) Tính tỉ số phần trăm của 12 và 35 (làm tròn kết quả đến hàng phần mười).\nc) Tìm một số biết 3/7 của nó bằng -21.",
      loi_giai: "a) Chữ số hàng làm tròn là 5, ngay bên phải nó là 6 ≥ 5. Vậy ta cộng thêm 1: -23,567 ≈ -23,6.\nb) Tỉ số phần trăm của 12 và 35 là: (12 × 100 ÷ 35)% ≈ 34,3%.\nc) Số cần tìm là: -21 ÷ 3/7 = -21 × 7/3 = -49."
    }
  ],
  luyen_tap: [
    {
      de_bai: "Tìm số rác khó phân hủy thu được biết 3/20 của nó bằng 9 kg.",
      dap_an: "Số rác khó phân hủy thu được là: 9 ÷ 3/20 = 9 × 20/3 = 60 (kg)."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Làm tròn số 31,189 đến hàng phần trăm được kết quả là:",
      dap_an: ["31,19", "31,2", "31,18", "31,20"],
      dap_an_dung: 0,
      giai_thich: "Chữ số sau hàng phần trăm là 9 ≥ 5. Cộng thêm 1 vào chữ số 8 ta được 9, do đó 31,189 ≈ 31,19."
    },
    {
      cau_hoi: "Bác Nhung gửi tiết kiệm 10 triệu đồng với kì hạn 1 năm, lãi suất 6,8% một năm. Hết kì hạn 1 năm, số tiền lãi rút được là:",
      dap_an: ["0,68 triệu đồng", "10,68 triệu đồng", "6,8 triệu đồng", "1,068 triệu đồng"],
      dap_an_dung: 0,
      giai_thich: "Số tiền lãi sau 1 năm là: 10 × 6,8% = 0,68 (triệu đồng)."
    }
  ],
  ghi_nho: [
    "Muốn tìm giá trị phân số m/n của a, ta lấy a nhân với m/n.",
    "Muốn tìm một số biết m/n của nó bằng a, ta lấy a chia cho m/n."
  ]
};

// ============================================================
// CHƯƠNG VI: HÌNH HỌC PHẲNG (Điểm, Đoạn thẳng, Tia, Góc)
// ============================================================

const CH6_B1: LessonGuide = {
  bai_id: "CH6_B1",
  chuong: 6,
  so_tiet: 3,
  tieu_de: "Chương VI - Bài 1: Điểm. Đường thẳng",
  muc_tieu: [
    "Nhận biết khái niệm điểm, đường thẳng.",
    "Nhận biết quan hệ điểm thuộc/không thuộc đường thẳng.",
    "Hiểu tiên đề về đường thẳng đi qua hai điểm phân biệt.",
    "Nhận biết ba điểm thẳng hàng, điểm nằm giữa hai điểm."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Điểm và đường thẳng",
      noi_dung: [
        "Dấu chấm nhỏ là hình ảnh của điểm. Chữ cái in hoa A, B, C đặt tên cho điểm.",
        "Dùng vạch thẳng để biểu diễn một đường thẳng, dùng chữ cái in thường a, b, c đặt tên.",
        "Đường thẳng kéo dài vô tận về hai phía."
      ]
    },
    {
      tieu_de: "2. Điểm thuộc đường thẳng. Điểm không thuộc đường thẳng",
      noi_dung: [
        "Điểm A thuộc đường thẳng d kí hiệu là A ∈ d.",
        "Điểm B không thuộc đường thẳng d kí hiệu là B ∉ d.",
        "Có vô số điểm thuộc một đường thẳng."
      ]
    },
    {
      tieu_de: "3. Ba điểm thẳng hàng",
      noi_dung: [
        "Khi ba điểm cùng thuộc một đường thẳng, ta nói chúng thẳng hàng.",
        "Khi ba điểm không cùng thuộc bất kì đường thẳng nào, ta nói chúng không thẳng hàng.",
        "Trong ba điểm thẳng hàng, có một và chỉ một điểm nằm giữa hai điểm còn lại."
      ]
    }
  ],
  cong_thuc: [
    "Kí hiệu thuộc: A ∈ d",
    "Kí hiệu không thuộc: B ∉ d",
    "Số đường thẳng đi qua n điểm phân biệt không thẳng hàng: n × (n - 1) ÷ 2"
  ],
  vi_du: [
    {
      de_bai: "Cho hình vẽ gồm đường thẳng d và hai điểm A, B. Điểm A nằm trên đường thẳng d, điểm B không nằm trên đường thẳng d. Hãy viết kí hiệu tương ứng.",
      loi_giai: "Điểm A thuộc đường thẳng d kí hiệu là A ∈ d.\nĐiểm B không thuộc đường thẳng d kí hiệu là B ∉ d."
    },
    {
      de_bai: "Cho 5 điểm A, B, C, D, E trong đó không có ba điểm nào thẳng hàng. Có thể vẽ được bao nhiêu đường thẳng đi qua các cặp điểm trên?",
      loi_giai: "Áp dụng công thức tính số đường thẳng từ n điểm không thẳng hàng:\nSố đường thẳng = 5 × (5 - 1) ÷ 2 = 10 (đường thẳng)."
    }
  ],
  luyen_tap: [
    {
      de_bai: "Cho hình vẽ có ba điểm A, B, E thẳng hàng (A nằm giữa B và E), và ba điểm C, E, D thẳng hàng (E nằm giữa C và D). Hãy cho biết điểm E có thuộc đường thẳng AB không?",
      dap_an: "Có, vì ba điểm A, B, E thẳng hàng nên điểm E thuộc đường thẳng đi qua A và B (đường thẳng AB)."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Qua hai điểm phân biệt A và B có thể vẽ được bao nhiêu đường thẳng?",
      dap_an: ["Vô số", "2", "1", "0"],
      dap_an_dung: 2,
      giai_thich: "Có một và chỉ một đường thẳng đi qua hai điểm phân biệt."
    },
    {
      cau_hoi: "Cho ba điểm A, B, C cùng nằm trên đường thẳng d. Biết điểm B nằm giữa A và C. Khẳng định nào sau đây là SAI?",
      dap_an: ["Ba điểm A, B, C thẳng hàng.", "Điểm A nằm giữa B và C.", "Đường thẳng d đi qua ba điểm A, B, C.", "B ∈ d"],
      dap_an_dung: 1,
      giai_thich: "Vì B nằm giữa A và C nên A không thể nằm giữa B và C."
    }
  ],
  ghi_nho: [
    "Điểm thuộc đường thẳng kí hiệu là ∈, không thuộc kí hiệu là ∉.",
    "Qua hai điểm phân biệt vẽ được duy nhất một đường thẳng."
  ]
};

const CH6_B2_B3_B4: LessonGuide = {
  bai_id: "CH6_B2_B3_B4",
  chuong: 6,
  so_tiet: 4,
  tieu_de: "Chương VI - Bài 2: Tia. Đoạn thẳng. Độ dài đoạn thẳng",
  muc_tieu: [
    "Nhận biết hai đường thẳng cắt nhau, hai đường thẳng song song, giao điểm của chúng.",
    "Nhận biết đoạn thẳng, tia, gốc của tia.",
    "Biết dùng thước đo độ dài đoạn thẳng và so sánh các đoạn thẳng.",
    "Nhận biết được một số hình ảnh thực tế song song/cắt nhau."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Hai đường thẳng cắt nhau và song song",
      noi_dung: [
        "Hai đường thẳng chỉ có một điểm chung gọi là hai đường thẳng cắt nhau. Điểm chung đó là giao điểm.",
        "Hai đường thẳng không có điểm chung nào gọi là hai đường thẳng song song, kí hiệu a // b."
      ]
    },
    {
      tieu_de: "2. Đoạn thẳng và độ dài đoạn thẳng",
      noi_dung: [
        "Đoạn thẳng AB là hình gồm điểm A, điểm B và tất cả các điểm nằm giữa A và B. Hai điểm A, B là hai đầu mút.",
        "Mỗi đoạn thẳng có độ dài là một số dương. So sánh hai đoạn thẳng bằng cách so sánh độ dài của chúng."
      ]
    },
    {
      tieu_de: "3. Tia, hai tia đối nhau và trùng nhau",
      noi_dung: [
        "Hình gồm điểm O và một phần đường thẳng bị chia ra bởi O gọi là tia gốc O. Khi đọc/viết phải đọc gốc O trước.",
        "Hai tia chung gốc Ox và Oy tạo thành đường thẳng xy gọi là hai tia đối nhau.",
        "Hai tia trùng nhau là hai tia chung gốc và cùng đi về một phía."
      ]
    }
  ],
  cong_thuc: [
    "Kí hiệu song song: a // b",
    "AM + MB = AB (nếu M nằm giữa A và B)"
  ],
  vi_du: [
    {
      de_bai: "Cho đoạn thẳng AB = 8 cm. Điểm C là trung điểm của đoạn thẳng AB. Tính độ dài đoạn thẳng AC và BC.",
      loi_giai: "Vì C là trung điểm của đoạn thẳng AB nên C nằm giữa A, B và chia đoạn thẳng AB thành hai phần bằng nhau:\nAC = BC = AB ÷ 2 = 8 ÷ 2 = 4 (cm).\nVậy AC = 4 cm, BC = 4 cm."
    },
    {
      de_bai: "Trên đường thẳng xy, lấy điểm O. Điểm O chia đường thẳng xy thành những tia nào? Hai tia đó có quan hệ gì với nhau?",
      loi_giai: "Điểm O chia đường thẳng xy thành hai tia là tia Ox và tia Oy. Hai tia này chung gốc O và tạo thành đường thẳng xy nên chúng là hai tia đối nhau."
    }
  ],
  luyen_tap: [
    {
      de_bai: "Cho đoạn thẳng AB = 10 cm, C là điểm nằm giữa A, B. Gọi M là trung điểm của AC và N là trung điểm của CB. Tính độ dài đoạn thẳng MN.",
      dap_an: "Vì C nằm giữa A và B nên AC + CB = AB = 10 cm.\nVì M là trung điểm của AC nên MC = AC ÷ 2.\nVì N là trung điểm của CB nên CN = CB ÷ 2.\nMN = MC + CN = (AC + CB) ÷ 2 = AB ÷ 2 = 5 (cm)."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Hai đường thẳng song song là hai đường thẳng:",
      dap_an: ["Có 1 điểm chung.", "Có 2 điểm chung.", "Không có điểm chung nào.", "Có vô số điểm chung."],
      dap_an_dung: 2,
      giai_thich: "Hai đường thẳng song song là hai đường thẳng không có điểm chung nào."
    },
    {
      cau_hoi: "Hai tia đối nhau là hai tia:",
      dap_an: ["Có chung gốc.", "Tạo thành một đường thẳng.", "Chung gốc và tạo thành một đường thẳng.", "Cùng nằm trên một đường thẳng."],
      dap_an_dung: 2,
      giai_thich: "Hai tia đối nhau phải chung gốc và tạo thành một đường thẳng."
    }
  ],
  ghi_nho: [
    "Hai đường thẳng song song không có điểm chung nào. Hai tia đối nhau chung gốc và tạo thành đường thẳng."
  ]
};

const CH6_B5_MIDPOINT: LessonGuide = {
  bai_id: "CH6_B5_MIDPOINT",
  chuong: 6,
  so_tiet: 4,
  tieu_de: "Chương VI - Bài 3: Trung điểm của đoạn thẳng. Góc",
  muc_tieu: [
    "Nhận biết trung điểm của đoạn thẳng và tính chất của nó.",
    "Nhận biết góc, đỉnh, cạnh của góc, điểm nằm trong góc.",
    "Biết đo góc và so sánh hai góc.",
    "Phân biệt góc nhọn, góc vuông, góc tù, góc bẹt."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Trung điểm của đoạn thẳng",
      noi_dung: [
        "Trung điểm M của đoạn thẳng AB là điểm nằm giữa A, B sao cho AM = MB.",
        "AM = MB = AB ÷ 2."
      ]
    },
    {
      tieu_de: "2. Góc và số đo góc",
      noi_dung: [
        "Góc là hình gồm hai tia chung gốc. Gốc chung là đỉnh, hai tia là cạnh của góc.",
        "Thước đo góc dùng để xác định số đo góc theo đơn vị độ (°). Không vượt quá 180°.",
        "Điểm nằm trong góc là điểm nằm ở phần giới hạn bởi hai tia của góc."
      ]
    },
    {
      tieu_de: "3. Phân loại góc",
      noi_dung: [
        "Góc nhọn: 0° < ∠A < 90°.",
        "Góc vuông: ∠A = 90°.",
        "Góc tù: 90° < ∠A < 180°.",
        "Góc bẹt: ∠A = 180° (có hai cạnh là hai tia đối nhau)."
      ]
    }
  ],
  cong_thuc: [
    "Nếu M là trung điểm của AB: AM = MB = AB ÷ 2",
    "Góc vuông: ∠A = 90°",
    "Góc bẹt: ∠A = 180°"
  ],
  vi_du: [
    {
      de_bai: "Cho các góc có số đo sau: ∠xOy = 45°, ∠mIn = 90°, ∠uHv = 135°, ∠zKt = 180°. Hãy phân loại các góc trên.",
      loi_giai: "- ∠xOy = 45° là góc nhọn vì 0° < 45° < 90°.\n- ∠mIn = 90° là góc vuông.\n- ∠uHv = 135° là góc tù vì 90° < 135° < 180°.\n- ∠zKt = 180° là góc bẹt."
    }
  ],
  luyen_tap: [
    {
      de_bai: "Cho hai đường thẳng xx' và yy' cắt nhau tại O. Khi đó, hình tạo thành có bao nhiêu góc bẹt? Kể tên.",
      dap_an: "Có 2 góc bẹt: góc xOx' (tạo bởi Ox và Ox') và góc yOy' (tạo bởi Oy và Oy')."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Góc có số đo 135° thuộc loại góc nào?",
      dap_an: ["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"],
      dap_an_dung: 2,
      giai_thich: "Vì 90° < 135° < 180° nên góc này là góc tù."
    },
    {
      cau_hoi: "M là trung điểm của đoạn thẳng AB khi và chỉ khi:",
      dap_an: ["M nằm giữa A và B.", "MA = MB.", "M nằm giữa A, B và MA = MB.", "MA + MB = AB."],
      dap_an_dung: 2,
      giai_thich: "Trung điểm phải nằm giữa hai đầu mút và cách đều hai đầu mút đó."
    }
  ],
  ghi_nho: [
    "Trung điểm nằm giữa và cách đều hai đầu mút.",
    "Góc nhọn < Góc vuông (90°) < Góc tù < Góc bẹt (180°)."
  ]
};

// ============================================================
// CHƯƠNG IV: MỘT SỐ YẾU TỐ THỐNG KÊ VÀ XÁC SUẤT
// ============================================================

const CD_G6_C4_B1: LessonGuide = {
  bai_id: "CD_G6_C4_B1",
  chuong: 4,
  so_tiet: 4,
  tieu_de: "Chương IV - Bài 1: Thu thập, phân loại, biểu diễn dữ liệu",
  muc_tieu: [
    "Thực hiện được việc thu thập, phân loại dữ liệu theo tiêu chí cho trước.",
    "Nhận biết được tính hợp lí của dữ liệu.",
    "Đọc và mô tả thành thạo dữ liệu dạng bảng số liệu, biểu đồ tranh, biểu đồ cột đơn.",
    "Lựa chọn và biểu diễn dữ liệu vào bảng thống kê, biểu đồ thích hợp."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Thu thập, tổ chức, phân tích và xử lí dữ liệu",
      noi_dung: [
        "Sau khi thu thập, phân loại, biểu diễn dữ liệu, ta cần phân tích và xử lí dữ liệu đó để tìm ra thông tin hữu ích và rút ra kết luận.",
        "Có thể nhận biết tính hợp lí của dữ liệu thống kê theo các tiêu chí đơn giản."
      ]
    },
    {
      tieu_de: "2. Biểu diễn dữ liệu",
      noi_dung: [
        "Bảng số liệu: Biểu diễn dữ liệu dưới dạng bảng. Thể hiện đủ đối tượng, tiêu chí và số liệu thống kê.",
        "Biểu đồ tranh: Biểu diễn dữ liệu dưới dạng hình ảnh biểu trưng.",
        "Biểu đồ cột: Biểu diễn dữ liệu dưới dạng các cột chữ nhật đứng hoặc ngang."
      ]
    }
  ],
  cong_thuc: [
    "Dữ liệu định lượng (số liệu): Dữ liệu biểu diễn bằng các số thực kèm đơn vị đo.",
    "Dữ liệu định tính (không phải số liệu): Tên gọi, thuộc tính, nhãn phân loại."
  ],
  vi_du: [
    {
      de_bai: "Thống kê dụng cụ học tập của 10 học sinh tổ Hai lớp 6E thu được kết quả: Bút: 18 cái, Thước thẳng: 10 cái, Compa: 5 cái, Ê ke: 9 cái. Hãy xác định đối tượng thống kê, tiêu chí thống kê và lập bảng số liệu.",
      loi_giai: "Đối tượng thống kê: Số lượng mỗi loại dụng cụ học tập.\nTiêu chí thống kê: Các dụng cụ học tập của 10 học sinh tổ Hai lớp 6E.\nBảng số liệu:\n- Bút: 18\n- Thước thẳng: 10\n- Compa: 5\n- Ê ke: 9"
    }
  ],
  luyen_tap: [
    {
      de_bai: "Bạn Châu liệt kê chiều cao (cm) của tổ là: 138, 140, 142, 146, 150, 151, 154, 252. Số đo 252 cm có hợp lí không?",
      dap_an: "Không hợp lí, vì chiều cao 252 cm là quá lớn (bất thường) đối với học sinh lớp 6. Có thể có sai sót trong quá trình đo đạc hoặc ghi chép."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Trong các dữ liệu sau, dữ liệu nào là dữ liệu định lượng (số liệu)?",
      dap_an: ["Danh sách môn học yêu thích", "Màu sắc yêu thích", "Nhiệt độ trung bình các ngày trong tuần (°C)", "Nơi sinh học sinh"],
      dap_an_dung: 2,
      giai_thich: "Nhiệt độ trung bình là số liệu (dịnh lượng), các cái còn lại là định tính."
    }
  ],
  ghi_nho: [
    "Bảng số liệu, biểu đồ tranh, biểu đồ cột thể hiện đủ đối tượng, tiêu chí và số liệu thống kê."
  ]
};

const CD_G6_C4_B2: LessonGuide = {
  bai_id: "CD_G6_C4_B2",
  chuong: 4,
  so_tiet: 2,
  tieu_de: "Chương IV - Bài 2: Biểu đồ cột kép",
  muc_tieu: [
    "Đọc và mô tả thành thạo các dữ liệu ở dạng biểu đồ cột kép.",
    "Lựa chọn và biểu diễn được dữ liệu từ biểu đồ cột kép sang bảng số liệu.",
    "Nhận biết được ý nghĩa của biểu đồ cột kép trong việc so sánh hai nhóm đối tượng."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Khái niệm biểu đồ cột kép",
      noi_dung: [
        "Biểu đồ cột kép được tạo ra bằng cách ghép các cột biểu diễn của hai nhóm đối tượng cạnh nhau để so sánh trực quan.",
        "Mỗi nhóm đối tượng thường được biểu diễn bằng các cột có màu sắc hoặc họa tiết khác nhau để dễ phân biệt.",
        "Biểu đồ cột kép có chú giải màu/họa tiết để biết cột nào biểu diễn cho nhóm đối tượng nào."
      ]
    }
  ],
  cong_thuc: [
    "Độc lập so sánh: Biểu đồ ghép cột của nhóm A và cột của nhóm B cho cùng một tiêu chí."
  ],
  vi_du: [
    {
      de_bai: "Một biểu đồ cột kép cho biết dân số xã A và xã B lần lượt là: Năm 2016 (Xã A: 3000, Xã B: 3200); Năm 2017 (Xã A: 3100, Xã B: 3250); Năm 2018 (Xã A: 3150, Xã B: 3300). Vẽ bảng thống kê số liệu.",
      loi_giai: "Bảng thống kê số liệu:\nNăm | Dân số Xã A | Dân số Xã B\n2016 | 3000 | 3200\n2017 | 3100 | 3250\n2018 | 3150 | 3300"
    }
  ],
  luyen_tap: [
    {
      de_bai: "Từ số liệu ví dụ trên, xã nào có dân số tăng nhanh hơn trong giai đoạn 2016-2018?",
      dap_an: "Xã A tăng: 3150 - 3000 = 150 người.\nXã B tăng: 3300 - 3200 = 100 người.\nVậy xã A có dân số tăng nhanh hơn."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Mục đích chính của việc sử dụng biểu đồ cột kép là gì?",
      dap_an: ["Chỉ để hình ảnh đẹp hơn", "Để so sánh dữ liệu của hai nhóm đối tượng trên cùng tiêu chí", "Để tiết kiệm diện tích vẽ", "Để biểu diễn số liệu không cần số"],
      dap_an_dung: 1,
      giai_thich: "Biểu đồ cột kép giúp so sánh trực quan các số liệu của hai nhóm đối tượng theo từng tiêu chí."
    }
  ],
  ghi_nho: [
    "Biểu đồ cột kép giúp so sánh một cách trực quan dữ liệu của hai nhóm đối tượng."
  ]
};

const CD_G6_C4_B3_B4: LessonGuide = {
  bai_id: "CD_G6_C4_B3_B4",
  chuong: 4,
  so_tiet: 6,
  tieu_de: "Chương IV - Bài 3: Mô hình xác suất và xác suất thực nghiệm",
  muc_tieu: [
    "Nhận biết mô hình xác suất của một số trò chơi/thí nghiệm đơn giản.",
    "Nhận biết xác suất thực nghiệm của một sự kiện.",
    "Biết tính xác suất thực nghiệm dựa vào số liệu thực tế."
  ],
  kien_thuc: [
    {
      tieu_de: "1. Mô hình xác suất trong một số trò chơi đơn giản",
      noi_dung: [
        "Mô hình xác suất gồm hai yếu tố: Tập hợp các kết quả có thể xảy ra của trò chơi/thí nghiệm; Sự kiện quan tâm.",
        "Ví dụ: Tung đồng xu thì kết quả có thể xảy ra là {Sấp; Ngửa}."
      ]
    },
    {
      tieu_de: "2. Xác suất thực nghiệm của một sự kiện",
      noi_dung: [
        "Xác suất thực nghiệm phản ánh tỉ lệ giữa số lần sự kiện xảy ra và tổng số lần thực hiện thực nghiệm.",
        "Công thức: Xác suất thực nghiệm = (Số lần sự kiện xảy ra) / (Tổng số lần thực nghiệm)."
      ]
    }
  ],
  cong_thuc: [
    "Xác suất thực nghiệm = k / n",
    "k: Số lần sự kiện xảy ra",
    "n: Tổng số lần thực hiện thí nghiệm"
  ],
  vi_du: [
    {
      de_bai: "Một hộp chứa 1 thẻ màu Xanh, 1 thẻ màu Vàng, 1 thẻ màu Đỏ. Rút ngẫu nhiên 1 thẻ, ghi nhận màu rồi bỏ lại. Chỉ ra mô hình xác suất của trò chơi này.",
      loi_giai: "Mô hình xác suất gồm:\n- Tập hợp các kết quả có thể xảy ra: {Xanh; Vàng; Đỏ}.\n- Mỗi lần rút chỉ nhận được 1 trong 3 kết quả trên với cơ hội như nhau."
    },
    {
      de_bai: "Rút thẻ ngẫu nhiên 20 lần từ hộp trên, thu được 5 lần thẻ màu Xanh. Tính xác suất thực nghiệm rút được thẻ màu Xanh.",
      loi_giai: "Số lần sự kiện 'rút được thẻ Xanh' xảy ra là: k = 5.\nTổng số lần thực nghiệm rút thẻ là: n = 20.\nXác suất thực nghiệm là: 5/20 = 1/4 (hay 25%)."
    }
  ],
  luyen_tap: [
    {
      de_bai: "Tung đồng xu 50 lần liên tiếp, có 24 lần xuất hiện mặt Sấp (S). Tính xác suất thực nghiệm xuất hiện mặt Ngửa (N).",
      dap_an: "Số lần xuất hiện mặt Ngửa là: 50 - 24 = 26 lần.\nXác suất thực nghiệm xuất hiện mặt Ngửa là: 26/50 = 13/25."
    }
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: "Sau 25 lần rút thẻ liên tiếp, nhận thấy có 4 lần lấy được thẻ đánh số 6. Xác suất thực nghiệm của sự kiện rút được thẻ đánh số 6 là:",
      dap_an: ["1/10", "4/10", "4/25", "21/25"],
      dap_an_dung: 2,
      giai_thich: "Xác suất thực nghiệm = số lần rút được thẻ 6 / tổng số lần rút = 4/25."
    }
  ],
  ghi_nho: [
    "Xác suất thực nghiệm phụ thuộc vào số lần thực hiện thực nghiệm và có thể thay đổi sau mỗi lần thực hiện."
  ]
};

// ============================================================
// EXPORT - Tất cả bài học HK2
// ============================================================

export const CANH_DIEU_TOAN_6_HK2_GUIDES: LessonGuide[] = [
  CD_G6_C5_B1,
  CD_G6_C5_B2,
  CD_G6_C5_B3,
  CD_G6_C5_B4,
  CH5_B5,
  CH5_B6_B7,
  CH5_B8_B9_B10,
  CH6_B1,
  CH6_B2_B3_B4,
  CH6_B5_MIDPOINT,
  CD_G6_C4_B1,
  CD_G6_C4_B2,
  CD_G6_C4_B3_B4
];

// Mapping từ tên bài trong timeline sang bài hướng dẫn HK2
export const TIMELINE_TO_GUIDE_MAP_HK2: Record<string, string> = {
  'Chương V - Bài 1: Phân số với tử và mẫu là số nguyên (3 tiết)': 'CD_G6_C5_B1',
  'Chương V - Bài 2: So sánh phân số. Hỗn số dương (3 tiết)': 'CD_G6_C5_B2',
  'Chương V - Bài 3: Phép cộng và phép trừ phân số (4 tiết)': 'CD_G6_C5_B3',
  'Chương V - Bài 4: Phép nhân và phép chia phân số (4 tiết)': 'CD_G6_C5_B4',
  'Chương V - Bài 5: Số thập phân (3 tiết)': 'CH5_B5',
  'Chương V - Bài 6: Phép tính cộng, trừ, nhân, chia số thập phân (4 tiết)': 'CH5_B6_B7',
  'Chương V - Bài 7: Tỉ số và tỉ số phần trăm (4 tiết)': 'CH5_B8_B9_B10',
  'Chương VI - Bài 1: Điểm. Đường thẳng (3 tiết)': 'CH6_B1',
  'Chương VI - Bài 2: Tia. Đoạn thẳng. Độ dài đoạn thẳng (4 tiết)': 'CH6_B2_B3_B4',
  'Chương VI - Bài 3: Trung điểm của đoạn thẳng. Góc (4 tiết)': 'CH6_B5_MIDPOINT',
  'Chương IV - Bài 1: Thu thập, phân loại, biểu diễn dữ liệu (3 tiết)': 'CD_G6_C4_B1',
  'Chương IV - Bài 2: Biểu đồ cột đơn, biểu đồ cột kép (4 tiết)': 'CD_G6_C4_B2',
  'Chương IV - Bài 3: Mô hình xác suất và xác suất thực nghiệm (3 tiết)': 'CD_G6_C4_B3_B4',
};

// Helper function to get guide by bai_id
export function getLessonGuideHK2(baiId: string): LessonGuide | undefined {
  return CANH_DIEU_TOAN_6_HK2_GUIDES.find(g => g.bai_id === baiId);
}

// Helper function to get guide from timeline name
export function getLessonGuideByTimelineNameHK2(tenBai: string): LessonGuide | undefined {
  const baiId = TIMELINE_TO_GUIDE_MAP_HK2[tenBai];
  if (!baiId) return undefined;
  return getLessonGuideHK2(baiId);
}
