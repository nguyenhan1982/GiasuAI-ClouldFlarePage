// ============================================================
// HƯỚNG DẪN CHI TIẾT - TOÁN 6 HK1 - CÁNH DIỀU
// Dữ liệu trích xuất từ Giáo án chính thức
// ============================================================

export interface LessonExample {
  de_bai: string;
  loi_giai: string;
}

export interface LessonExercise {
  de_bai: string;
  dap_an: string;
}

export interface QuizQuestion {
  cau_hoi: string;
  dap_an: string[];
  dap_an_dung: number; // index of correct answer (0-based)
  giai_thich?: string;
}

export interface LessonGuide {
  bai_id: string;           // Maps to timeline ten_bai
  chuong: number;
  so_tiet: number;
  tieu_de: string;
  muc_tieu: string[];       // Learning objectives
  kien_thuc: {              // Key knowledge sections
    tieu_de: string;
    noi_dung: string[];
  }[];
  cong_thuc?: string[];     // Important formulas/rules
  vi_du: LessonExample[];   // Examples with solutions
  luyen_tap: LessonExercise[]; // Practice exercises
  cau_hoi_on_tap?: QuizQuestion[]; // Quick review quiz
  ghi_nho: string[];        // Key takeaways
}

// ============================================================
// CHƯƠNG I: SỐ TỰ NHIÊN
// ============================================================

const BAI_1_TAP_HOP: LessonGuide = {
  bai_id: 'C1_BAI_1',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 1: Tập hợp',
  muc_tieu: [
    'Hiểu được các khái niệm: tập hợp, phần tử của tập hợp',
    'Biết cách kí hiệu và viết một tập hợp, sử dụng kí hiệu ∈ và ∉',
    'Biết cách viết một tập hợp theo hai cách: liệt kê hoặc chỉ ra tính chất đặc trưng',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Một số ví dụ về tập hợp',
      noi_dung: [
        'Khái niệm tập hợp thường gặp trong đời sống hàng ngày và trong toán học.',
        'Ví dụ: Tập hợp các học sinh của tổ 1 lớp 6A; Tập hợp các số trên mặt đồng hồ.',
      ],
    },
    {
      tieu_de: '2. Kí hiệu và cách viết một tập hợp',
      noi_dung: [
        'Người ta thường dùng các chữ cái in hoa để đặt tên cho một tập hợp.',
        'Ví dụ: Tập hợp A gồm các số tự nhiên nhỏ hơn 5. Ta viết: A = {0; 1; 2; 3; 4}',
        'Các số 0; 1; 2; 3; 4 được gọi là các phần tử của tập hợp A.',
        'Lưu ý: Các phần tử viết trong hai dấu ngoặc nhọn {}, cách nhau bởi dấu ";".',
        'Mỗi phần tử được liệt kê một lần, thứ tự liệt kê tùy ý.',
      ],
    },
    {
      tieu_de: '3. Phần tử thuộc tập hợp',
      noi_dung: [
        'Kí hiệu ∈: phần tử thuộc tập hợp. Ví dụ: 2 ∈ B nghĩa là 2 là phần tử của tập hợp B.',
        'Kí hiệu ∉: phần tử không thuộc tập hợp. Ví dụ: 4 ∉ B nghĩa là 4 không là phần tử của tập hợp B.',
      ],
    },
    {
      tieu_de: '4. Cách cho một tập hợp',
      noi_dung: [
        'Cách 1 - Liệt kê các phần tử: A = {0; 2; 4; 6; 8}',
        'Cách 2 - Chỉ ra tính chất đặc trưng: A = {x | x là số tự nhiên chẵn, x < 10}',
      ],
    },
  ],
  cong_thuc: [
    'Kí hiệu ∈ : thuộc (phần tử thuộc tập hợp)',
    'Kí hiệu ∉ : không thuộc (phần tử không thuộc tập hợp)',
    'Hai cách cho tập hợp: Liệt kê hoặc Chỉ ra tính chất đặc trưng',
  ],
  vi_du: [
    {
      de_bai: 'Cho B = {2; 3; 5; 7}. Hãy xác định phần tử thuộc và không thuộc B.',
      loi_giai: '2 ∈ B (2 là phần tử của B)\n4 ∉ B (4 không là phần tử của B)',
    },
    {
      de_bai: 'Viết tập hợp H gồm các tháng dương lịch có 30 ngày.',
      loi_giai: 'H = {Tháng 4; Tháng 6; Tháng 9; Tháng 11}\nTháng 2 ∉ H; Tháng 4 ∈ H; Tháng 12 ∉ H.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết tập hợp A các số tự nhiên lẻ nhỏ hơn 10.',
      dap_an: 'A = {1; 3; 5; 7; 9}',
    },
    {
      de_bai: 'Viết tập hợp C = {7; 10; 13; 16} bằng cách chỉ ra tính chất đặc trưng.',
      dap_an: 'C = {x | x = 3k + 1, k ∈ ℕ, 2 ≤ k ≤ 5} hoặc C là tập hợp các số tự nhiên chia cho 3 dư 1, từ 7 đến 16.',
    },
    {
      de_bai: 'Gọi D là tập hợp các chữ số xuất hiện trong số 2020. Viết tập hợp D.',
      dap_an: 'D = {0; 2}',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Cách viết tập hợp nào sau đây đúng?',
      dap_an: ['A = [1; 2; 3; 4]', 'A = (1; 2; 3; 4)', 'A = 1; 2; 3; 4', 'A = {1; 2; 3; 4}'],
      dap_an_dung: 3,
      giai_thich: 'Tập hợp được viết trong hai dấu ngoặc nhọn {}.',
    },
    {
      cau_hoi: 'Cho B = {2; 3; 4; 5}. Chọn đáp án SAI:',
      dap_an: ['2 ∈ B', '5 ∈ B', '1 ∉ B', '6 ∈ B'],
      dap_an_dung: 3,
      giai_thich: '6 không thuộc B vì B chỉ gồm {2; 3; 4; 5}.',
    },
    {
      cau_hoi: 'Viết tập hợp A các số tự nhiên lớn hơn 5 và nhỏ hơn 10.',
      dap_an: ['A = {6; 7; 8; 9}', 'A = {5; 6; 7; 8; 9}', 'A = {6; 7; 8; 9; 10}', 'A = {6; 7; 8}'],
      dap_an_dung: 0,
      giai_thich: 'Các số tự nhiên lớn hơn 5 và nhỏ hơn 10 là: 6, 7, 8, 9.',
    },
    {
      cau_hoi: 'Viết tập hợp P các chữ cái khác nhau trong cụm từ "HOC SINH"',
      dap_an: ['P = {H; O; C; S; I; N; H}', 'P = {H; O; C; S; I; N}', 'P = {H; C; S; I; N}', 'P = {H; O; C; H; I; N}'],
      dap_an_dung: 1,
      giai_thich: 'Mỗi phần tử chỉ liệt kê một lần. "HOC SINH" có các chữ cái: H, O, C, S, I, N.',
    },
  ],
  ghi_nho: [
    'Tập hợp gồm các phần tử có chung tính chất nào đó.',
    'Dùng chữ cái in hoa đặt tên tập hợp, các phần tử viết trong {}.',
    'Kí hiệu ∈ (thuộc) và ∉ (không thuộc) để chỉ quan hệ phần tử - tập hợp.',
    'Có 2 cách cho tập hợp: liệt kê các phần tử hoặc chỉ ra tính chất đặc trưng.',
    'Mỗi phần tử chỉ liệt kê 1 lần, thứ tự liệt kê tùy ý.',
  ],
};

const BAI_2_TAP_HOP_SO_TU_NHIEN: LessonGuide = {
  bai_id: 'C1_BAI_2',
  chuong: 1,
  so_tiet: 3,
  tieu_de: 'Bài 2: Tập hợp các số tự nhiên',
  muc_tieu: [
    'Nhận biết và viết tập hợp các số tự nhiên ℕ và ℕ*',
    'Đọc và viết được các số tự nhiên có nhiều chữ số',
    'Biểu diễn số tự nhiên trên tia số',
    'Hiểu giá trị mỗi chữ số ở các vị trí khác nhau trong hệ thập phân',
    'Đọc và viết các số La Mã từ 1 đến 30',
    'So sánh hai số tự nhiên có nhiều chữ số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tập hợp ℕ và ℕ*',
      noi_dung: [
        'Các số 0, 1, 2, 3, 4, ... là các số tự nhiên.',
        'Tập hợp các số tự nhiên kí hiệu là ℕ: ℕ = {0; 1; 2; 3; 4; ...}',
        'Tập hợp các số tự nhiên khác 0 kí hiệu là ℕ*: ℕ* = {1; 2; 3; 4; ...}',
        'Nếu x ∈ ℕ* thì x ∈ ℕ (nhưng chưa chắc ngược lại, vì 0 ∈ ℕ nhưng 0 ∉ ℕ*).',
      ],
    },
    {
      tieu_de: '2. Cách đọc và viết số tự nhiên',
      noi_dung: [
        'Khi viết số tự nhiên có bốn chữ số trở lên, viết tách riêng từng nhóm ba chữ số từ phải sang trái.',
        'Ví dụ: 12 123 452 đọc là "Mười hai triệu một trăm hai mươi ba nghìn bốn trăm năm mươi hai".',
      ],
    },
    {
      tieu_de: '3. Biểu diễn số tự nhiên trong hệ thập phân',
      noi_dung: [
        'Mỗi số tự nhiên được biểu diễn bởi một điểm trên tia số.',
        'Trong hệ thập phân, mỗi chữ số ở vị trí khác nhau có giá trị khác nhau.',
        'Ví dụ: 953 = 9 × 100 + 5 × 10 + 3 × 1',
        'Số có hai chữ số: ab̅ = a × 10 + b (a ≠ 0)',
        'Số có ba chữ số: abc̅ = a × 100 + b × 10 + c (a ≠ 0)',
      ],
    },
    {
      tieu_de: '4. Số La Mã',
      noi_dung: [
        'Các chữ số La Mã cơ bản: I = 1, V = 5, X = 10',
        'Nguyên tắc viết: Nếu đặt chữ số nhỏ bên trái chữ số lớn thì trừ, đặt bên phải thì cộng.',
        'Ví dụ: IV = 4, VI = 6, IX = 9, XI = 11, XIV = 14, XIX = 19, XX = 20, XXX = 30.',
      ],
    },
    {
      tieu_de: '5. So sánh hai số tự nhiên',
      noi_dung: [
        'So sánh hai số tự nhiên bất kì: Số nào có ít chữ số hơn thì nhỏ hơn.',
        'Nếu hai số có cùng số chữ số, ta so sánh từng cặp chữ số ở cùng hàng từ trái sang phải.',
        'Trên tia số, số bên trái nhỏ hơn số bên phải.',
      ],
    },
  ],
  cong_thuc: [
    'ℕ = {0; 1; 2; 3; 4; ...} — Tập hợp số tự nhiên',
    'ℕ* = {1; 2; 3; 4; ...} — Tập hợp số tự nhiên khác 0',
    'ab̅ = a × 10 + b (a ≠ 0) — Số có hai chữ số',
    'abc̅ = a × 100 + b × 10 + c (a ≠ 0) — Số có ba chữ số',
    'I = 1, V = 5, X = 10 — Số La Mã cơ bản',
  ],
  vi_du: [
    {
      de_bai: 'Đọc số 12 123 452',
      loi_giai: 'Mười hai triệu một trăm hai mươi ba nghìn bốn trăm năm mươi hai.',
    },
    {
      de_bai: 'Viết số: Ba mươi tư nghìn sáu trăm năm mươi',
      loi_giai: '34 650',
    },
    {
      de_bai: 'Viết số 953 thành tổng theo hàng',
      loi_giai: '953 = 9 × 100 + 5 × 10 + 3 × 1',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Phát biểu nào đúng? a) 0 ∈ ℕ*  b) Nếu x ∈ ℕ* thì x ∈ ℕ',
      dap_an: 'b) đúng. Vì ℕ* ⊂ ℕ, mọi số tự nhiên khác 0 đều là số tự nhiên.',
    },
    {
      de_bai: 'Đọc số 71 219 367 và 1 153 692 305',
      dap_an: '71 219 367: Bảy mươi mốt triệu hai trăm mười chín nghìn ba trăm sáu mươi bảy.\n1 153 692 305: Một tỉ một trăm năm mươi ba triệu sáu trăm chín mươi hai nghìn ba trăm linh năm.',
    },
    {
      de_bai: 'Viết số: Ba tỉ hai trăm năm mươi chín triệu sáu trăm ba mươi nghìn hai trăm mười bảy',
      dap_an: '3 259 630 217',
    },
  ],
  ghi_nho: [
    'ℕ chứa số 0, ℕ* không chứa số 0.',
    'Viết số nhiều chữ số nên tách nhóm 3 chữ số từ phải sang trái.',
    'Trong hệ thập phân, mỗi chữ số ở vị trí khác nhau mang giá trị khác nhau.',
    'Số La Mã: I = 1, V = 5, X = 10. Đặt nhỏ trước lớn thì trừ (IV=4), sau lớn thì cộng (VI=6).',
  ],
};

const BAI_3_PHEP_CONG_TRU: LessonGuide = {
  bai_id: 'C1_BAI_3',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 3: Phép cộng, phép trừ các số tự nhiên',
  muc_tieu: [
    'Nhận biết các tính chất giao hoán, kết hợp của phép cộng',
    'Vận dụng tính chất để tính nhanh',
    'Hiểu điều kiện thực hiện được phép trừ trong ℕ',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép cộng các số tự nhiên',
      noi_dung: [
        'a + b = c, trong đó a và b là các số hạng, c là tổng.',
        'Tính chất giao hoán: a + b = b + a',
        'Tính chất kết hợp: (a + b) + c = a + (b + c)',
        'Cộng với 0: a + 0 = 0 + a = a',
      ],
    },
    {
      tieu_de: '2. Phép trừ các số tự nhiên',
      noi_dung: [
        'a - b = c (a ≥ b), trong đó a là số bị trừ, b là số trừ, c là hiệu.',
        'Điều kiện: Phép trừ chỉ thực hiện được khi số bị trừ lớn hơn hoặc bằng số trừ.',
        'Tính chất: a - 0 = a; a - a = 0',
      ],
    },
    {
      tieu_de: '3. Tính nhanh bằng cách nhóm',
      noi_dung: [
        'Áp dụng tính chất giao hoán và kết hợp để nhóm các số "tròn chục" với nhau.',
        'Ví dụ: 67 + 21 + 33 = (67 + 33) + 21 = 100 + 21 = 121',
      ],
    },
  ],
  cong_thuc: [
    'a + b = b + a (giao hoán)',
    '(a + b) + c = a + (b + c) (kết hợp)',
    'a + 0 = a',
    'a - b = c khi a ≥ b',
  ],
  vi_du: [
    {
      de_bai: 'Tính nhanh: 67 + 21 + 33',
      loi_giai: '67 + 21 + 33 = (67 + 33) + 21 = 100 + 21 = 121',
    },
    {
      de_bai: 'Tính nhanh: 56 + 78 + 44 + 22',
      loi_giai: '= (56 + 44) + (78 + 22) = 100 + 100 = 200',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhanh: 997 + 37',
      dap_an: '997 + 37 = (997 + 3) + 34 = 1000 + 34 = 1034',
    },
    {
      de_bai: 'Tìm x biết: x + 35 = 120',
      dap_an: 'x = 120 - 35 = 85',
    },
  ],
  ghi_nho: [
    'Phép cộng có tính chất giao hoán và kết hợp.',
    'Phép trừ chỉ thực hiện được khi số bị trừ ≥ số trừ.',
    'Khi tính nhanh, nhóm các số cho tổng tròn chục/tròn trăm.',
  ],
};

const BAI_4_PHEP_NHAN_CHIA: LessonGuide = {
  bai_id: 'C1_BAI_4',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 4: Phép nhân và phép chia số tự nhiên',
  muc_tieu: [
    'Nhận biết tính chất giao hoán, kết hợp của phép nhân',
    'Nhận biết tính chất phân phối của phép nhân đối với phép cộng',
    'Vận dụng tính chất để tính nhanh',
    'Hiểu phép chia có dư và phép chia hết',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép nhân các số tự nhiên',
      noi_dung: [
        'a × b = c, trong đó a và b là các thừa số, c là tích.',
        'Tính chất giao hoán: a × b = b × a',
        'Tính chất kết hợp: (a × b) × c = a × (b × c)',
        'Nhân với 1: a × 1 = 1 × a = a',
        'Nhân với 0: a × 0 = 0 × a = 0',
        'Tính chất phân phối: a × (b + c) = a × b + a × c',
        'Tính chất phân phối: a × (b - c) = a × b - a × c (khi b ≥ c)',
      ],
    },
    {
      tieu_de: '2. Phép chia hết và phép chia có dư',
      noi_dung: [
        'Phép chia hết: a = b × q (a là số bị chia, b là số chia, q là thương), b ≠ 0.',
        'Phép chia có dư: a = b × q + r (0 < r < b)',
        'Nếu r = 0: phép chia hết. Nếu r ≠ 0: phép chia có dư.',
        'Số chia luôn khác 0.',
      ],
    },
  ],
  cong_thuc: [
    'a × b = b × a (giao hoán)',
    '(a × b) × c = a × (b × c) (kết hợp)',
    'a × (b + c) = a × b + a × c (phân phối)',
    'a × (b - c) = a × b - a × c (phân phối, b ≥ c)',
    'a = b × q + r với 0 ≤ r < b (phép chia có dư)',
  ],
  vi_du: [
    {
      de_bai: 'Tính nhanh: 25 × 36',
      loi_giai: '25 × 36 = 25 × 4 × 9 = 100 × 9 = 900',
    },
    {
      de_bai: 'Tính nhanh: 53 × 101',
      loi_giai: '53 × 101 = 53 × (100 + 1) = 53 × 100 + 53 × 1 = 5300 + 53 = 5353',
    },
    {
      de_bai: 'Thực hiện phép chia: 325 : 4',
      loi_giai: '325 = 4 × 81 + 1. Vậy 325 : 4 = 81 dư 1.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhanh: 4 × 37 × 25',
      dap_an: '4 × 37 × 25 = (4 × 25) × 37 = 100 × 37 = 3700',
    },
    {
      de_bai: 'Tính nhanh: 98 × 23',
      dap_an: '98 × 23 = (100 - 2) × 23 = 2300 - 46 = 2254',
    },
  ],
  ghi_nho: [
    'Phép nhân có tính giao hoán, kết hợp và phân phối đối với phép cộng (trừ).',
    'Phép chia hết: dư bằng 0. Phép chia có dư: 0 < r < b.',
    'Không bao giờ chia cho 0.',
  ],
};

const BAI_5_LUY_THUA: LessonGuide = {
  bai_id: 'C1_BAI_5',
  chuong: 1,
  so_tiet: 3,
  tieu_de: 'Bài 5: Phép tính lũy thừa với số mũ tự nhiên',
  muc_tieu: [
    'Hiểu khái niệm lũy thừa với số mũ tự nhiên',
    'Biết cách tính lũy thừa',
    'Nhận biết nhân và chia hai lũy thừa cùng cơ số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Lũy thừa với số mũ tự nhiên',
      noi_dung: [
        'aⁿ = a × a × ... × a (n thừa số a), trong đó n ≥ 2',
        'a gọi là cơ số, n gọi là số mũ, aⁿ gọi là lũy thừa bậc n của a.',
        'Quy ước: a¹ = a; a⁰ = 1 (a ≠ 0)',
        'Ví dụ: 2³ = 2 × 2 × 2 = 8; 5² = 5 × 5 = 25; 10³ = 1000',
      ],
    },
    {
      tieu_de: '2. Nhân hai lũy thừa cùng cơ số',
      noi_dung: [
        'aᵐ × aⁿ = aᵐ⁺ⁿ',
        'Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ.',
        'Ví dụ: 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128',
      ],
    },
    {
      tieu_de: '3. Chia hai lũy thừa cùng cơ số',
      noi_dung: [
        'aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0, m ≥ n)',
        'Khi chia hai lũy thừa cùng cơ số (khác 0), ta giữ nguyên cơ số và trừ các số mũ.',
        'Ví dụ: 5⁷ : 5³ = 5⁷⁻³ = 5⁴ = 625',
      ],
    },
  ],
  cong_thuc: [
    'aⁿ = a × a × ... × a (n thừa số a)',
    'a¹ = a; a⁰ = 1 (a ≠ 0)',
    'aᵐ × aⁿ = aᵐ⁺ⁿ (nhân lũy thừa cùng cơ số)',
    'aᵐ : aⁿ = aᵐ⁻ⁿ (chia lũy thừa cùng cơ số, a ≠ 0, m ≥ n)',
  ],
  vi_du: [
    {
      de_bai: 'Tính: 3⁴',
      loi_giai: '3⁴ = 3 × 3 × 3 × 3 = 81',
    },
    {
      de_bai: 'Tính: 2³ × 2⁵',
      loi_giai: '2³ × 2⁵ = 2³⁺⁵ = 2⁸ = 256',
    },
    {
      de_bai: 'Viết kết quả phép tính dưới dạng lũy thừa: 10⁶ : 10³',
      loi_giai: '10⁶ : 10³ = 10⁶⁻³ = 10³ = 1000',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: 2⁵; 4³; 10⁴',
      dap_an: '2⁵ = 32; 4³ = 64; 10⁴ = 10 000',
    },
    {
      de_bai: 'Viết dưới dạng lũy thừa: a) 5 × 5 × 5 × 5; b) 3 × 3 × 3 × 3 × 3',
      dap_an: 'a) 5⁴; b) 3⁵',
    },
    {
      de_bai: 'Tính: 7⁸ : 7⁶',
      dap_an: '7⁸ : 7⁶ = 7² = 49',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: '2⁵ bằng bao nhiêu?',
      dap_an: ['10', '25', '32', '64'],
      dap_an_dung: 2,
      giai_thich: '2⁵ = 2×2×2×2×2 = 32',
    },
    {
      cau_hoi: '3² × 3³ = ?',
      dap_an: ['3⁵', '3⁶', '9⁵', '9⁶'],
      dap_an_dung: 0,
      giai_thich: 'Nhân hai lũy thừa cùng cơ số: giữ cơ số, cộng số mũ: 3²⁺³ = 3⁵',
    },
  ],
  ghi_nho: [
    'aⁿ nghĩa là nhân a với chính nó n lần.',
    'Nhân lũy thừa cùng cơ số: giữ cơ số, cộng số mũ.',
    'Chia lũy thừa cùng cơ số: giữ cơ số, trừ số mũ.',
    'a⁰ = 1 (với a ≠ 0), a¹ = a.',
  ],
};

const BAI_6_THU_TU_PHEP_TINH: LessonGuide = {
  bai_id: 'C1_BAI_6',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 6: Thứ tự thực hiện các phép tính',
  muc_tieu: [
    'Nhận biết thứ tự thực hiện các phép tính trong biểu thức',
    'Vận dụng quy tắc thứ tự để tính giá trị biểu thức',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Thứ tự thực hiện phép tính trong biểu thức không có ngoặc',
      noi_dung: [
        'Nếu chỉ có phép cộng, trừ (hoặc chỉ nhân, chia): thực hiện từ trái sang phải.',
        'Nếu có cả cộng/trừ và nhân/chia: thực hiện nhân/chia trước, cộng/trừ sau.',
        'Nếu có lũy thừa: thực hiện lũy thừa trước, rồi nhân/chia, rồi cộng/trừ.',
        'Thứ tự: Lũy thừa → Nhân/Chia → Cộng/Trừ',
      ],
    },
    {
      tieu_de: '2. Thứ tự thực hiện phép tính trong biểu thức có ngoặc',
      noi_dung: [
        'Thực hiện trong ngoặc tròn ( ) trước, rồi ngoặc vuông [ ], rồi ngoặc nhọn { }.',
        'Thứ tự: ( ) → [ ] → { }',
      ],
    },
  ],
  cong_thuc: [
    'Thứ tự: Lũy thừa → Nhân/Chia → Cộng/Trừ',
    'Ngoặc: ( ) → [ ] → { }',
  ],
  vi_du: [
    {
      de_bai: 'Tính: 5 × 3² - 16 : 4',
      loi_giai: '= 5 × 9 - 16 : 4\n= 45 - 4\n= 41',
    },
    {
      de_bai: 'Tính: 100 : {2 × [52 - (35 - 8)]}',
      loi_giai: '= 100 : {2 × [52 - 27]}\n= 100 : {2 × 25}\n= 100 : 50\n= 2',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: 3 × 5² - 18 : 3²',
      dap_an: '= 3 × 25 - 18 : 9 = 75 - 2 = 73',
    },
    {
      de_bai: 'Tính: 2³ + 5 × (12 - 7)',
      dap_an: '= 8 + 5 × 5 = 8 + 25 = 33',
    },
  ],
  ghi_nho: [
    'Không ngoặc: Lũy thừa → Nhân/Chia → Cộng/Trừ.',
    'Có ngoặc: thực hiện trong ngoặc trước, từ trong ra ngoài.',
    'Cùng bậc ưu tiên: thực hiện từ trái sang phải.',
  ],
};

const BAI_7_CHIA_HET: LessonGuide = {
  bai_id: 'C1_BAI_7',
  chuong: 1,
  so_tiet: 4,
  tieu_de: 'Bài 7: Quan hệ chia hết. Tính chất chia hết',
  muc_tieu: [
    'Hiểu khái niệm chia hết và không chia hết',
    'Nhận biết các tính chất chia hết',
    'Vận dụng tính chất để xác định tính chia hết',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Quan hệ chia hết',
      noi_dung: [
        'Nếu a = b × q (a, b ∈ ℕ, b ≠ 0) thì ta nói a chia hết cho b.',
        'Kí hiệu: a ⋮ b (đọc: a chia hết cho b)',
        'Ta còn nói: a là bội của b, b là ước của a.',
        'Ví dụ: 12 ⋮ 4 vì 12 = 4 × 3. Ta nói 12 là bội của 4, 4 là ước của 12.',
      ],
    },
    {
      tieu_de: '2. Tính chất chia hết',
      noi_dung: [
        'Tính chất 1: Nếu a ⋮ c và b ⋮ c thì (a + b) ⋮ c và (a - b) ⋮ c (với a ≥ b).',
        'Tính chất 2: Nếu a ⋮ c và b không chia hết cho c thì (a + b) không chia hết cho c.',
        'Ví dụ: 12 ⋮ 3 và 6 ⋮ 3 → (12 + 6) = 18 ⋮ 3 ✓',
        'Ví dụ: 12 ⋮ 5 sai (vì 12 = 5 × 2 + 2)',
      ],
    },
  ],
  cong_thuc: [
    'a ⋮ b ⟺ a = b × q (q ∈ ℕ)',
    'a ⋮ c và b ⋮ c ⟹ (a + b) ⋮ c',
    'a ⋮ c và b ⋮ c ⟹ (a - b) ⋮ c (a ≥ b)',
  ],
  vi_du: [
    {
      de_bai: 'Không tính, xét xem tổng 24 + 18 có chia hết cho 6 không.',
      loi_giai: 'Ta có: 24 ⋮ 6 và 18 ⋮ 6 → (24 + 18) ⋮ 6 (theo tính chất 1).',
    },
    {
      de_bai: 'Tổng 15 + 7 có chia hết cho 5 không?',
      loi_giai: 'Ta có: 15 ⋮ 5 nhưng 7 không chia hết cho 5 → (15 + 7) = 22 không chia hết cho 5.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Không tính, xét 36 + 48 có chia hết cho 12 không.',
      dap_an: '36 ⋮ 12 và 48 ⋮ 12 → (36 + 48) ⋮ 12.',
    },
    {
      de_bai: 'Tìm các ước của 12.',
      dap_an: 'Ư(12) = {1; 2; 3; 4; 6; 12}',
    },
  ],
  ghi_nho: [
    'a ⋮ b nghĩa là a chia hết cho b (a là bội, b là ước).',
    'Tổng (hiệu) của hai số chia hết cho c thì cũng chia hết cho c.',
    'Nếu một số chia hết cho c, số kia không, thì tổng không chia hết cho c.',
  ],
};

const BAI_8_DAU_HIEU_CHIA_HET_2_5: LessonGuide = {
  bai_id: 'C1_BAI_8',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 8: Dấu hiệu chia hết cho 2 và 5',
  muc_tieu: [
    'Nhận biết dấu hiệu chia hết cho 2 và cho 5',
    'Nhận biết số chẵn, số lẻ',
    'Vận dụng dấu hiệu để xác định tính chia hết',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Dấu hiệu chia hết cho 2',
      noi_dung: [
        'Các số có chữ số tận cùng là 0, 2, 4, 6, 8 thì chia hết cho 2.',
        'Các số chia hết cho 2 gọi là số chẵn.',
        'Các số không chia hết cho 2 gọi là số lẻ (tận cùng là 1, 3, 5, 7, 9).',
      ],
    },
    {
      tieu_de: '2. Dấu hiệu chia hết cho 5',
      noi_dung: [
        'Các số có chữ số tận cùng là 0 hoặc 5 thì chia hết cho 5.',
        'Số vừa chia hết cho 2 vừa chia hết cho 5 thì có chữ số tận cùng là 0 (chia hết cho 10).',
      ],
    },
  ],
  cong_thuc: [
    'Chia hết cho 2: chữ số tận cùng là 0, 2, 4, 6, 8',
    'Chia hết cho 5: chữ số tận cùng là 0 hoặc 5',
    'Chia hết cho cả 2 và 5: chữ số tận cùng là 0',
  ],
  vi_du: [
    {
      de_bai: 'Trong các số 245, 136, 470, 381, số nào chia hết cho 2? Cho 5?',
      loi_giai: 'Chia hết cho 2: 136 (tận cùng 6), 470 (tận cùng 0)\nChia hết cho 5: 245 (tận cùng 5), 470 (tận cùng 0)',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Điền chữ số vào dấu * để 35* chia hết cho 2.',
      dap_an: '* ∈ {0; 2; 4; 6; 8}. Các số: 350, 352, 354, 356, 358.',
    },
    {
      de_bai: 'Tìm số tự nhiên có hai chữ số, chia hết cho cả 2 và 5.',
      dap_an: 'Chữ số tận cùng phải là 0: 10, 20, 30, 40, 50, 60, 70, 80, 90.',
    },
  ],
  ghi_nho: [
    'Chia hết cho 2: xét chữ số tận cùng (0, 2, 4, 6, 8).',
    'Chia hết cho 5: xét chữ số tận cùng (0 hoặc 5).',
    'Chia hết cho 10 = chia hết cho cả 2 và 5: tận cùng bằng 0.',
  ],
};

const BAI_9_DAU_HIEU_CHIA_HET_3_9: LessonGuide = {
  bai_id: 'C1_BAI_9',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 9: Dấu hiệu chia hết cho 3 và 9',
  muc_tieu: [
    'Nhận biết dấu hiệu chia hết cho 3 và cho 9',
    'Vận dụng dấu hiệu để xác định tính chia hết',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Dấu hiệu chia hết cho 9',
      noi_dung: [
        'Số có tổng các chữ số chia hết cho 9 thì chia hết cho 9.',
        'Ví dụ: 378 có tổng chữ số = 3 + 7 + 8 = 18, 18 ⋮ 9 → 378 ⋮ 9.',
      ],
    },
    {
      tieu_de: '2. Dấu hiệu chia hết cho 3',
      noi_dung: [
        'Số có tổng các chữ số chia hết cho 3 thì chia hết cho 3.',
        'Ví dụ: 246 có tổng chữ số = 2 + 4 + 6 = 12, 12 ⋮ 3 → 246 ⋮ 3.',
        'Lưu ý: Số chia hết cho 9 luôn chia hết cho 3, nhưng chưa chắc ngược lại.',
      ],
    },
  ],
  cong_thuc: [
    'Chia hết cho 9: tổng các chữ số chia hết cho 9',
    'Chia hết cho 3: tổng các chữ số chia hết cho 3',
    'Chia hết cho 9 ⟹ chia hết cho 3 (nhưng không ngược lại)',
  ],
  vi_du: [
    {
      de_bai: 'Số 1 234 có chia hết cho 3 không? Cho 9 không?',
      loi_giai: 'Tổng chữ số = 1 + 2 + 3 + 4 = 10.\n10 không chia hết cho 3 → 1 234 không chia hết cho 3.\n10 không chia hết cho 9 → 1 234 không chia hết cho 9.',
    },
    {
      de_bai: 'Số 2 718 có chia hết cho 9 không?',
      loi_giai: 'Tổng chữ số = 2 + 7 + 1 + 8 = 18. 18 ⋮ 9 → 2 718 ⋮ 9.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Điền chữ số vào * để 5*1 chia hết cho 3.',
      dap_an: 'Tổng chữ số = 5 + * + 1 = 6 + *. Để chia hết cho 3: * ∈ {0; 3; 6; 9}.',
    },
    {
      de_bai: 'Trong các số 135, 246, 891, 1 000, số nào chia hết cho 9?',
      dap_an: '135: 1+3+5=9 ✓; 246: 2+4+6=12 ✗; 891: 8+9+1=18 ✓; 1000: 1+0+0+0=1 ✗. Đáp án: 135 và 891.',
    },
  ],
  ghi_nho: [
    'Chia hết cho 3: tính tổng các chữ số, xem tổng đó chia hết cho 3 không.',
    'Chia hết cho 9: tính tổng các chữ số, xem tổng đó chia hết cho 9 không.',
    'Mọi số chia hết cho 9 đều chia hết cho 3.',
  ],
};

const BAI_10_SO_NGUYEN_TO: LessonGuide = {
  bai_id: 'C1_BAI_10',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 10: Số nguyên tố - Hợp số',
  muc_tieu: [
    'Hiểu khái niệm số nguyên tố và hợp số',
    'Nhận biết được số nguyên tố và hợp số',
    'Thuộc các số nguyên tố nhỏ hơn 20',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Số nguyên tố và hợp số',
      noi_dung: [
        'Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có đúng hai ước là 1 và chính nó.',
        'Hợp số là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.',
        'Số 0 và số 1 không phải là số nguyên tố, cũng không phải là hợp số.',
        'Các số nguyên tố nhỏ hơn 20: 2, 3, 5, 7, 11, 13, 17, 19.',
        '2 là số nguyên tố chẵn duy nhất.',
      ],
    },
  ],
  cong_thuc: [
    'Số nguyên tố: > 1, chỉ có 2 ước (1 và chính nó)',
    'Hợp số: > 1, có nhiều hơn 2 ước',
    'Số nguyên tố < 20: 2, 3, 5, 7, 11, 13, 17, 19',
  ],
  vi_du: [
    {
      de_bai: 'Số 7 là số nguyên tố hay hợp số?',
      loi_giai: '7 chỉ có 2 ước là 1 và 7 → 7 là số nguyên tố.',
    },
    {
      de_bai: 'Số 15 là số nguyên tố hay hợp số?',
      loi_giai: '15 có các ước: 1, 3, 5, 15 (4 ước > 2) → 15 là hợp số.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Trong các số 11, 14, 17, 21, 23, 25, số nào là số nguyên tố?',
      dap_an: '11 (ước: 1, 11), 17 (ước: 1, 17), 23 (ước: 1, 23) là số nguyên tố.',
    },
  ],
  ghi_nho: [
    'Số nguyên tố chỉ chia hết cho 1 và chính nó.',
    '2 là số nguyên tố chẵn duy nhất.',
    '0 và 1 không phải số nguyên tố, cũng không phải hợp số.',
  ],
};

const BAI_11_PHAN_TICH_THUA_SO: LessonGuide = {
  bai_id: 'C1_BAI_11',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 11: Phân tích một số ra thừa số nguyên tố',
  muc_tieu: [
    'Biết cách phân tích một số tự nhiên lớn hơn 1 ra thừa số nguyên tố',
    'Viết kết quả dưới dạng lũy thừa của các số nguyên tố',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phân tích ra thừa số nguyên tố',
      noi_dung: [
        'Phân tích một số tự nhiên lớn hơn 1 ra thừa số nguyên tố là viết số đó dưới dạng tích các thừa số nguyên tố.',
        'Cách thực hiện: Chia dần cho các số nguyên tố 2, 3, 5, 7, 11, ... cho đến khi thương bằng 1.',
        'Mỗi số tự nhiên lớn hơn 1 đều phân tích được ra thừa số nguyên tố (duy nhất).',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Phân tích 300 ra thừa số nguyên tố.',
      loi_giai: '300 = 2 × 150 = 2 × 2 × 75 = 2 × 2 × 3 × 25 = 2 × 2 × 3 × 5 × 5\n= 2² × 3 × 5²',
    },
    {
      de_bai: 'Phân tích 360 ra thừa số nguyên tố.',
      loi_giai: '360 | 2\n180 | 2\n90  | 2\n45  | 3\n15  | 3\n5   | 5\n1\n360 = 2³ × 3² × 5',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Phân tích ra thừa số nguyên tố: a) 120; b) 900',
      dap_an: 'a) 120 = 2³ × 3 × 5\nb) 900 = 2² × 3² × 5²',
    },
  ],
  ghi_nho: [
    'Chia dần cho các số nguyên tố từ nhỏ đến lớn.',
    'Kết quả viết dưới dạng tích các lũy thừa của số nguyên tố.',
    'Mỗi số tự nhiên > 1 chỉ có một cách phân tích (không kể thứ tự).',
  ],
};

const BAI_12_UCLN: LessonGuide = {
  bai_id: 'C1_BAI_12',
  chuong: 1,
  so_tiet: 3,
  tieu_de: 'Bài 12: Ước chung và ước chung lớn nhất',
  muc_tieu: [
    'Hiểu khái niệm ước chung và ước chung lớn nhất (ƯCLN)',
    'Biết cách tìm ƯCLN bằng phân tích ra thừa số nguyên tố',
    'Nhận biết hai số nguyên tố cùng nhau',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Ước chung',
      noi_dung: [
        'Ước chung của hai hay nhiều số là số nào chia hết cho tất cả các số đó.',
        'Kí hiệu: ƯC(a, b) là tập hợp các ước chung của a và b.',
        'Ví dụ: Ư(12) = {1; 2; 3; 4; 6; 12}, Ư(8) = {1; 2; 4; 8}\nƯC(12, 8) = {1; 2; 4}',
      ],
    },
    {
      tieu_de: '2. Ước chung lớn nhất (ƯCLN)',
      noi_dung: [
        'ƯCLN(a, b) là số lớn nhất trong tập ước chung của a và b.',
        'Cách tìm: Phân tích mỗi số ra thừa số nguyên tố → Chọn các thừa số nguyên tố chung → Lấy lũy thừa với số mũ nhỏ nhất → Nhân lại.',
        'Ví dụ: ƯCLN(12, 8): 12 = 2² × 3; 8 = 2³. Thừa số chung: 2, mũ nhỏ nhất: 2² = 4. ƯCLN = 4.',
      ],
    },
    {
      tieu_de: '3. Hai số nguyên tố cùng nhau',
      noi_dung: [
        'Hai số có ƯCLN bằng 1 gọi là hai số nguyên tố cùng nhau.',
        'Ví dụ: ƯCLN(4, 9) = 1 → 4 và 9 nguyên tố cùng nhau.',
      ],
    },
  ],
  cong_thuc: [
    'ƯCLN: Phân tích → Chọn thừa số chung → Mũ nhỏ nhất → Nhân',
    'ƯCLN(a, b) = 1 ⟹ a, b nguyên tố cùng nhau',
  ],
  vi_du: [
    {
      de_bai: 'Tìm ƯCLN(36, 84)',
      loi_giai: '36 = 2² × 3²\n84 = 2² × 3 × 7\nThừa số chung: 2 và 3. Mũ nhỏ nhất: 2² và 3¹\nƯCLN(36, 84) = 2² × 3 = 12',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm ƯCLN(24, 60)',
      dap_an: '24 = 2³ × 3; 60 = 2² × 3 × 5. ƯCLN = 2² × 3 = 12.',
    },
    {
      de_bai: 'Tìm ƯCLN(7, 15)',
      dap_an: '7 là số nguyên tố, 15 = 3 × 5. Không có thừa số chung → ƯCLN(7, 15) = 1.',
    },
  ],
  ghi_nho: [
    'ƯCLN: chọn thừa số nguyên tố CHUNG, lấy mũ NHỎ NHẤT.',
    'Hai số nguyên tố cùng nhau khi ƯCLN = 1.',
    'ƯCLN dùng để rút gọn phân số.',
  ],
};

const BAI_13_BCNN: LessonGuide = {
  bai_id: 'C1_BAI_13',
  chuong: 1,
  so_tiet: 3,
  tieu_de: 'Bài 13: Bội chung và bội chung nhỏ nhất',
  muc_tieu: [
    'Hiểu khái niệm bội chung và bội chung nhỏ nhất (BCNN)',
    'Biết cách tìm BCNN bằng phân tích ra thừa số nguyên tố',
    'Vận dụng BCNN giải bài toán thực tế',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Bội chung',
      noi_dung: [
        'Bội chung của hai hay nhiều số là số chia hết cho tất cả các số đó.',
        'Kí hiệu: BC(a, b) là tập hợp các bội chung của a và b.',
        'Ví dụ: B(4) = {0; 4; 8; 12; 16; 20; 24; ...}\nB(6) = {0; 6; 12; 18; 24; ...}\nBC(4, 6) = {0; 12; 24; ...}',
      ],
    },
    {
      tieu_de: '2. Bội chung nhỏ nhất (BCNN)',
      noi_dung: [
        'BCNN(a, b) là số nhỏ nhất khác 0 trong tập bội chung của a và b.',
        'Cách tìm: Phân tích mỗi số ra thừa số nguyên tố → Chọn tất cả các thừa số nguyên tố (chung và riêng) → Lấy lũy thừa với số mũ lớn nhất → Nhân lại.',
        'Ví dụ: BCNN(4, 6): 4 = 2²; 6 = 2 × 3. Các thừa số: 2, 3. Mũ lớn nhất: 2², 3¹. BCNN = 4 × 3 = 12.',
      ],
    },
  ],
  cong_thuc: [
    'BCNN: Phân tích → Chọn TẤT CẢ thừa số → Mũ LỚN NHẤT → Nhân',
    'So sánh với ƯCLN: ƯCLN chọn chung + mũ nhỏ; BCNN chọn tất cả + mũ lớn',
  ],
  vi_du: [
    {
      de_bai: 'Tìm BCNN(12, 18)',
      loi_giai: '12 = 2² × 3\n18 = 2 × 3²\nCác thừa số: 2, 3. Mũ lớn nhất: 2², 3²\nBCNN(12, 18) = 2² × 3² = 4 × 9 = 36',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm BCNN(8, 12, 15)',
      dap_an: '8 = 2³; 12 = 2² × 3; 15 = 3 × 5.\nBCNN = 2³ × 3 × 5 = 120.',
    },
  ],
  ghi_nho: [
    'BCNN: chọn TẤT CẢ thừa số nguyên tố, lấy mũ LỚN NHẤT.',
    'ƯCLN lấy "chung + nhỏ", BCNN lấy "tất cả + lớn".',
    'BCNN dùng để quy đồng mẫu số phân số.',
  ],
};

// ============================================================
// CHƯƠNG II: SỐ NGUYÊN
// ============================================================

const C2_BAI_1_SO_NGUYEN_AM: LessonGuide = {
  bai_id: 'C2_BAI_1',
  chuong: 2,
  so_tiet: 1,
  tieu_de: 'Chương II - Bài 1: Số nguyên âm',
  muc_tieu: [
    'Nhận biết số nguyên âm qua ví dụ thực tiễn',
    'Biết đọc và viết số nguyên âm',
    'Biểu diễn số nguyên âm trên trục số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Số nguyên âm',
      noi_dung: [
        'Các số -1, -2, -3, ... gọi là các số nguyên âm.',
        'Số nguyên âm biểu thị nhiệt độ dưới 0°C, độ sâu dưới mực nước biển, nợ tiền,...',
        'Ví dụ: -3°C nghĩa là 3 độ dưới 0°C; nợ 50 000đ viết là -50 000đ.',
      ],
    },
    {
      tieu_de: '2. Trục số',
      noi_dung: [
        'Trục số là đường thẳng trên đó đã xác định điểm gốc O (biểu diễn số 0), chiều dương và đơn vị đo.',
        'Các số nguyên dương nằm bên phải điểm O, số nguyên âm nằm bên trái điểm O.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Đọc nhiệt độ: -5°C',
      loi_giai: 'Âm năm độ C (5 độ dưới không)',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Dùng số nguyên âm biểu thị: a) Nợ 200 000đ; b) Nhiệt độ 10 độ dưới 0°C',
      dap_an: 'a) -200 000đ; b) -10°C',
    },
  ],
  ghi_nho: [
    'Số nguyên âm: có dấu trừ (-) phía trước.',
    'Trục số: trái là âm, phải là dương, giữa là 0.',
    'Số nguyên âm dùng biểu thị: nhiệt độ < 0, nợ tiền, dưới mực nước biển.',
  ],
};

const C2_BAI_2_TAP_HOP_SO_NGUYEN: LessonGuide = {
  bai_id: 'C2_BAI_2',
  chuong: 2,
  so_tiet: 3,
  tieu_de: 'Chương II - Bài 2: Tập hợp các số nguyên',
  muc_tieu: [
    'Biết tập hợp các số nguyên ℤ',
    'Hiểu khái niệm số đối, giá trị tuyệt đối',
    'So sánh hai số nguyên',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tập hợp ℤ',
      noi_dung: [
        'ℤ = {...; -3; -2; -1; 0; 1; 2; 3; ...}',
        'ℤ gồm: số nguyên dương (1, 2, 3, ...), số 0, và số nguyên âm (-1, -2, -3, ...)',
        'Số 0 không phải số nguyên dương, cũng không phải số nguyên âm.',
      ],
    },
    {
      tieu_de: '2. Số đối',
      noi_dung: [
        'Hai số nguyên cách đều điểm O trên trục số gọi là hai số đối nhau.',
        'Số đối của a là -a. Số đối của -a là a.',
        'Ví dụ: số đối của 3 là -3; số đối của -5 là 5; số đối của 0 là 0.',
      ],
    },
    {
      tieu_de: '3. Giá trị tuyệt đối',
      noi_dung: [
        'Giá trị tuyệt đối của số nguyên a là khoảng cách từ a đến 0 trên trục số.',
        'Kí hiệu: |a|',
        '|a| = a nếu a ≥ 0; |a| = -a nếu a < 0',
        'Ví dụ: |5| = 5; |-3| = 3; |0| = 0',
      ],
    },
    {
      tieu_de: '4. So sánh hai số nguyên',
      noi_dung: [
        'Trên trục số, số bên trái nhỏ hơn số bên phải.',
        'Mọi số nguyên dương > 0 > mọi số nguyên âm.',
        'Trong hai số nguyên âm, số nào có giá trị tuyệt đối lớn hơn thì nhỏ hơn.',
        'Ví dụ: -5 < -3 (vì |-5| = 5 > |-3| = 3)',
      ],
    },
  ],
  cong_thuc: [
    'ℤ = {...; -3; -2; -1; 0; 1; 2; 3; ...}',
    '|a| = a nếu a ≥ 0; |a| = -a nếu a < 0',
    'Số đối của a là -a',
  ],
  vi_du: [
    {
      de_bai: 'Tìm |7|, |-4|, |0|',
      loi_giai: '|7| = 7; |-4| = 4; |0| = 0',
    },
    {
      de_bai: 'So sánh: -3 và -7',
      loi_giai: '|-3| = 3 < |-7| = 7, nên -3 > -7.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Sắp xếp theo thứ tự tăng dần: 3, -5, 0, -2, 7, -1',
      dap_an: '-5 < -2 < -1 < 0 < 3 < 7',
    },
  ],
  ghi_nho: [
    'ℤ gồm số nguyên âm, 0, và số nguyên dương.',
    'Giá trị tuyệt đối luôn ≥ 0, là khoảng cách đến 0.',
    'Số nguyên âm nào có giá trị tuyệt đối LỚN hơn thì NHỎ hơn.',
  ],
};

const C2_BAI_3_PHEP_CONG_SO_NGUYEN: LessonGuide = {
  bai_id: 'C2_BAI_3',
  chuong: 2,
  so_tiet: 3,
  tieu_de: 'Chương II - Bài 3: Phép cộng các số nguyên',
  muc_tieu: [
    'Biết cộng hai số nguyên cùng dấu',
    'Biết cộng hai số nguyên khác dấu',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Cộng hai số nguyên cùng dấu',
      noi_dung: [
        'Cộng hai số nguyên dương: cộng bình thường.',
        'Cộng hai số nguyên âm: cộng hai giá trị tuyệt đối rồi thêm dấu trừ.',
        'Ví dụ: (-3) + (-5) = -(3 + 5) = -8',
      ],
    },
    {
      tieu_de: '2. Cộng hai số nguyên khác dấu',
      noi_dung: [
        'Hai số đối nhau: a + (-a) = 0',
        'Hai số không đối nhau: Lấy hiệu hai giá trị tuyệt đối (lớn - nhỏ), lấy dấu của số có giá trị tuyệt đối lớn hơn.',
        'Ví dụ: (-7) + 4 = -(7 - 4) = -3 (vì |-7| > |4|, lấy dấu âm)',
        'Ví dụ: 8 + (-3) = +(8 - 3) = 5 (vì |8| > |-3|, lấy dấu dương)',
      ],
    },
  ],
  cong_thuc: [
    '(-a) + (-b) = -(a + b) — cộng cùng dấu âm',
    'a + (-a) = 0 — hai số đối nhau',
    'Khác dấu: hiệu GTTĐ, dấu của số có GTTĐ lớn hơn',
  ],
  vi_du: [
    {
      de_bai: 'Tính: (-4) + (-9)',
      loi_giai: '(-4) + (-9) = -(4 + 9) = -13',
    },
    {
      de_bai: 'Tính: 12 + (-8)',
      loi_giai: '|12| = 12 > |-8| = 8. Hiệu: 12 - 8 = 4. Dấu dương. Kết quả: 4.',
    },
    {
      de_bai: 'Tính: (-15) + 10',
      loi_giai: '|-15| = 15 > |10| = 10. Hiệu: 15 - 10 = 5. Dấu âm. Kết quả: -5.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: a) (-6) + (-11); b) 25 + (-30); c) (-18) + 18',
      dap_an: 'a) -17; b) -5; c) 0',
    },
  ],
  ghi_nho: [
    'Cùng dấu: cộng GTTĐ, giữ dấu chung.',
    'Khác dấu: trừ GTTĐ (lớn - nhỏ), lấy dấu của số có GTTĐ lớn hơn.',
    'Hai số đối nhau cộng lại bằng 0.',
  ],
};

const C2_BAI_4_PHEP_TRU_QUY_TAC_NGOAC: LessonGuide = {
  bai_id: 'C2_BAI_4',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Chương II - Bài 4: Phép trừ số nguyên, quy tắc dấu ngoặc',
  muc_tieu: [
    'Biết thực hiện phép trừ hai số nguyên',
    'Nắm quy tắc dấu ngoặc',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép trừ hai số nguyên',
      noi_dung: [
        'Muốn trừ đi một số nguyên, ta cộng với số đối của nó.',
        'a - b = a + (-b)',
        'Ví dụ: 3 - 8 = 3 + (-8) = -5',
        'Ví dụ: (-4) - (-6) = (-4) + 6 = 2',
      ],
    },
    {
      tieu_de: '2. Quy tắc dấu ngoặc',
      noi_dung: [
        'Khi bỏ dấu ngoặc có dấu "+" phía trước: giữ nguyên dấu các số hạng.',
        'Khi bỏ dấu ngoặc có dấu "-" phía trước: đổi dấu tất cả các số hạng.',
        'Ví dụ: a + (b - c) = a + b - c',
        'Ví dụ: a - (b - c) = a - b + c',
      ],
    },
  ],
  cong_thuc: [
    'a - b = a + (-b)',
    'a + (b + c) = a + b + c',
    'a - (b + c) = a - b - c',
    'a - (b - c) = a - b + c',
  ],
  vi_du: [
    {
      de_bai: 'Tính: 5 - 11',
      loi_giai: '5 - 11 = 5 + (-11) = -6',
    },
    {
      de_bai: 'Tính: (-3) - (-7)',
      loi_giai: '(-3) - (-7) = (-3) + 7 = 4',
    },
    {
      de_bai: 'Bỏ ngoặc rồi tính: 25 - (15 - 8)',
      loi_giai: '= 25 - 15 + 8 = 18',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: a) 7 - 12; b) (-5) - (-9); c) 0 - (-4)',
      dap_an: 'a) -5; b) 4; c) 4',
    },
  ],
  ghi_nho: [
    'Trừ = Cộng với số đối: a - b = a + (-b).',
    'Bỏ ngoặc có dấu "+": giữ nguyên dấu.',
    'Bỏ ngoặc có dấu "-": đổi dấu tất cả.',
  ],
};

const C2_BAI_5_PHEP_NHAN_SO_NGUYEN: LessonGuide = {
  bai_id: 'C2_BAI_5',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Chương II - Bài 5: Phép nhân các số nguyên',
  muc_tieu: [
    'Biết nhân hai số nguyên cùng dấu và khác dấu',
    'Nhận biết quy tắc dấu trong phép nhân',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Nhân hai số nguyên khác dấu',
      noi_dung: [
        'Nhân hai giá trị tuyệt đối, kết quả mang dấu âm.',
        'Ví dụ: (-3) × 4 = -12; 5 × (-6) = -30',
        'Số nguyên nhân với 0 bằng 0.',
      ],
    },
    {
      tieu_de: '2. Nhân hai số nguyên cùng dấu',
      noi_dung: [
        'Nhân hai giá trị tuyệt đối, kết quả mang dấu dương.',
        'Ví dụ: (-4) × (-5) = 20; 3 × 7 = 21',
        'Quy tắc dấu: (+) × (+) = (+); (-) × (-) = (+); (+) × (-) = (-); (-) × (+) = (-)',
      ],
    },
  ],
  cong_thuc: [
    '(+) × (+) = (+)',
    '(-) × (-) = (+)',
    '(+) × (-) = (-)',
    '(-) × (+) = (-)',
    'a × 0 = 0',
  ],
  vi_du: [
    {
      de_bai: 'Tính: (-6) × (-7)',
      loi_giai: 'Cùng dấu → dương: (-6) × (-7) = +42 = 42',
    },
    {
      de_bai: 'Tính: (-8) × 5',
      loi_giai: 'Khác dấu → âm: (-8) × 5 = -40',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: a) (-3) × (-12); b) 7 × (-8); c) (-1) × (-1)',
      dap_an: 'a) 36; b) -56; c) 1',
    },
  ],
  ghi_nho: [
    'Cùng dấu → tích dương. Khác dấu → tích âm.',
    '"Âm nhân âm bằng dương" - quy tắc quan trọng nhất!',
    'Bất kì số nào nhân 0 đều bằng 0.',
  ],
};

const C2_BAI_6_PHEP_CHIA_SO_NGUYEN: LessonGuide = {
  bai_id: 'C2_BAI_6',
  chuong: 2,
  so_tiet: 3,
  tieu_de: 'Chương II - Bài 6: Phép chia hết hai số nguyên. Quan hệ chia hết',
  muc_tieu: [
    'Biết chia hết hai số nguyên',
    'Nhận biết quy tắc dấu trong phép chia',
    'Hiểu quan hệ chia hết trong ℤ',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép chia hết hai số nguyên',
      noi_dung: [
        'Quy tắc dấu giống phép nhân:',
        '(+) : (+) = (+); (-) : (-) = (+)',
        '(+) : (-) = (-); (-) : (+) = (-)',
        'Ví dụ: (-12) : 4 = -3; (-15) : (-3) = 5',
      ],
    },
    {
      tieu_de: '2. Quan hệ chia hết trong ℤ',
      noi_dung: [
        'a ⋮ b (b ≠ 0) nếu tồn tại số nguyên q sao cho a = b × q.',
        'Khi đó a là bội của b, b là ước của a.',
        'Ước của số nguyên a gồm cả ước dương và ước âm.',
        'Ví dụ: Ước của 6 trong ℤ: {-6; -3; -2; -1; 1; 2; 3; 6}',
      ],
    },
  ],
  cong_thuc: [
    'Chia cùng dấu → thương dương',
    'Chia khác dấu → thương âm',
    '0 : a = 0 (a ≠ 0)',
    'Không bao giờ chia cho 0',
  ],
  vi_du: [
    {
      de_bai: 'Tính: (-20) : (-4)',
      loi_giai: 'Cùng dấu → dương: (-20) : (-4) = 5',
    },
    {
      de_bai: 'Tính: 24 : (-6)',
      loi_giai: 'Khác dấu → âm: 24 : (-6) = -4',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm tất cả ước của -8 trong ℤ.',
      dap_an: 'Ư(-8) = {-8; -4; -2; -1; 1; 2; 4; 8}',
    },
  ],
  ghi_nho: [
    'Quy tắc dấu chia giống nhân: cùng dấu → dương, khác dấu → âm.',
    'Ước của số nguyên bao gồm cả ước âm.',
    'Không bao giờ chia cho 0.',
  ],
};

// ============================================================
// CHƯƠNG III: HÌNH HỌC TRỰC QUAN
// ============================================================

const C3_BAI_1_TAM_GIAC_DEU: LessonGuide = {
  bai_id: 'C3_BAI_1',
  chuong: 3,
  so_tiet: 3,
  tieu_de: 'Chương III - Bài 1: Tam giác đều. Hình vuông. Lục giác đều',
  muc_tieu: [
    'Nhận biết tam giác đều, hình vuông, lục giác đều',
    'Biết tính chu vi, diện tích các hình cơ bản',
    'Vẽ được các hình từ mạng ô vuông',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tam giác đều',
      noi_dung: [
        'Tam giác đều là tam giác có ba cạnh bằng nhau.',
        'Chu vi tam giác đều cạnh a: P = 3a',
        'Diện tích: S = (a² × √3) / 4',
      ],
    },
    {
      tieu_de: '2. Hình vuông',
      noi_dung: [
        'Hình vuông là hình chữ nhật có 4 cạnh bằng nhau.',
        'Chu vi hình vuông cạnh a: P = 4a',
        'Diện tích: S = a²',
      ],
    },
    {
      tieu_de: '3. Lục giác đều',
      noi_dung: [
        'Lục giác đều là hình có 6 cạnh bằng nhau, 6 góc bằng nhau.',
        'Chu vi: P = 6a',
        'Lục giác đều được tạo bởi 6 tam giác đều ghép lại.',
        'Diện tích: S = 6 × (a² × √3) / 4 = (3a² × √3) / 2',
      ],
    },
  ],
  cong_thuc: [
    'Tam giác đều cạnh a: P = 3a',
    'Hình vuông cạnh a: P = 4a, S = a²',
    'Lục giác đều cạnh a: P = 6a',
  ],
  vi_du: [
    {
      de_bai: 'Tính chu vi và diện tích hình vuông cạnh 5 cm.',
      loi_giai: 'P = 4 × 5 = 20 cm\nS = 5² = 25 cm²',
    },
    {
      de_bai: 'Tính chu vi tam giác đều cạnh 7 cm.',
      loi_giai: 'P = 3 × 7 = 21 cm',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính chu vi lục giác đều cạnh 4 cm.',
      dap_an: 'P = 6 × 4 = 24 cm',
    },
  ],
  ghi_nho: [
    'Tam giác đều: 3 cạnh bằng nhau.',
    'Hình vuông: 4 cạnh bằng nhau, 4 góc vuông.',
    'Lục giác đều: 6 cạnh bằng nhau = 6 tam giác đều ghép lại.',
  ],
};

const C3_BAI_2_HCN_HINH_THOI: LessonGuide = {
  bai_id: 'C3_BAI_2',
  chuong: 3,
  so_tiet: 3,
  tieu_de: 'Chương III - Bài 2: Hình chữ nhật. Hình thoi',
  muc_tieu: [
    'Nhận biết hình chữ nhật và hình thoi',
    'Tính chu vi, diện tích hình chữ nhật và hình thoi',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Hình chữ nhật',
      noi_dung: [
        'Hình chữ nhật có 4 góc vuông, hai cặp cạnh đối bằng nhau.',
        'Chu vi: P = 2 × (a + b), trong đó a là chiều dài, b là chiều rộng.',
        'Diện tích: S = a × b',
      ],
    },
    {
      tieu_de: '2. Hình thoi',
      noi_dung: [
        'Hình thoi có 4 cạnh bằng nhau.',
        'Chu vi: P = 4a',
        'Diện tích: S = (d₁ × d₂) / 2, trong đó d₁, d₂ là hai đường chéo.',
      ],
    },
  ],
  cong_thuc: [
    'HCN: P = 2(a + b), S = a × b',
    'Hình thoi: P = 4a, S = (d₁ × d₂) / 2',
  ],
  vi_du: [
    {
      de_bai: 'Tính diện tích HCN có chiều dài 8 cm, chiều rộng 5 cm.',
      loi_giai: 'S = 8 × 5 = 40 cm²',
    },
    {
      de_bai: 'Tính diện tích hình thoi có hai đường chéo 6 cm và 10 cm.',
      loi_giai: 'S = (6 × 10) / 2 = 30 cm²',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính chu vi hình thoi cạnh 9 cm.',
      dap_an: 'P = 4 × 9 = 36 cm',
    },
  ],
  ghi_nho: [
    'HCN: 4 góc vuông, S = dài × rộng.',
    'Hình thoi: 4 cạnh bằng nhau, S = (d₁ × d₂) / 2.',
    'Hình vuông vừa là HCN vừa là hình thoi.',
  ],
};

const C3_BAI_3_HINH_BINH_HANH: LessonGuide = {
  bai_id: 'C3_BAI_3',
  chuong: 3,
  so_tiet: 3,
  tieu_de: 'Chương III - Bài 3: Hình bình hành',
  muc_tieu: [
    'Nhận biết hình bình hành và tính chất',
    'Tính chu vi, diện tích hình bình hành',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Hình bình hành',
      noi_dung: [
        'Hình bình hành có hai cặp cạnh đối song song và bằng nhau.',
        'Chu vi: P = 2 × (a + b)',
        'Diện tích: S = a × h (a là cạnh đáy, h là chiều cao tương ứng).',
      ],
    },
  ],
  cong_thuc: [
    'Hình bình hành: P = 2(a + b), S = a × h',
  ],
  vi_du: [
    {
      de_bai: 'Tính diện tích hình bình hành có đáy 12 cm, chiều cao 7 cm.',
      loi_giai: 'S = 12 × 7 = 84 cm²',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Hình bình hành có cạnh đáy 10 cm, chiều cao 6 cm. Tính S.',
      dap_an: 'S = 10 × 6 = 60 cm²',
    },
  ],
  ghi_nho: [
    'Hình bình hành: 2 cặp cạnh đối song song và bằng nhau.',
    'S = đáy × chiều cao.',
  ],
};

const C3_BAI_4_HINH_THANG_CAN: LessonGuide = {
  bai_id: 'C3_BAI_4',
  chuong: 3,
  so_tiet: 3,
  tieu_de: 'Chương III - Bài 4: Hình thang cân',
  muc_tieu: [
    'Nhận biết hình thang và hình thang cân',
    'Tính chu vi, diện tích hình thang',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Hình thang',
      noi_dung: [
        'Hình thang có hai cạnh đối song song (đáy lớn và đáy bé).',
        'Diện tích: S = (a + b) × h / 2 (a, b là hai đáy, h là chiều cao).',
      ],
    },
    {
      tieu_de: '2. Hình thang cân',
      noi_dung: [
        'Hình thang cân có hai cạnh bên bằng nhau.',
        'Hình thang cân có hai đường chéo bằng nhau.',
      ],
    },
  ],
  cong_thuc: [
    'Hình thang: S = (a + b) × h / 2',
  ],
  vi_du: [
    {
      de_bai: 'Hình thang có đáy lớn 10 cm, đáy bé 6 cm, chiều cao 4 cm. Tính S.',
      loi_giai: 'S = (10 + 6) × 4 / 2 = 16 × 4 / 2 = 32 cm²',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Hình thang có hai đáy 8 cm và 14 cm, chiều cao 5 cm. Tính S.',
      dap_an: 'S = (8 + 14) × 5 / 2 = 55 cm²',
    },
  ],
  ghi_nho: [
    'Hình thang: có 1 cặp cạnh đối song song.',
    'S = (đáy lớn + đáy bé) × chiều cao / 2.',
    'Hình thang cân: 2 cạnh bên bằng nhau, 2 đường chéo bằng nhau.',
  ],
};

const C3_BAI_5_TRUC_DOI_XUNG: LessonGuide = {
  bai_id: 'C3_BAI_5',
  chuong: 3,
  so_tiet: 2,
  tieu_de: 'Chương III - Bài 5: Hình có trục đối xứng',
  muc_tieu: [
    'Nhận biết hình có trục đối xứng',
    'Xác định trục đối xứng của các hình cơ bản',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Trục đối xứng',
      noi_dung: [
        'Nếu gấp hình theo một đường thẳng mà hai nửa trùng khít nhau thì đường thẳng đó là trục đối xứng.',
        'Tam giác đều có 3 trục đối xứng.',
        'Hình vuông có 4 trục đối xứng.',
        'Hình chữ nhật có 2 trục đối xứng.',
        'Hình tròn có vô số trục đối xứng.',
        'Lục giác đều có 6 trục đối xứng.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Hình vuông có bao nhiêu trục đối xứng?',
      loi_giai: 'Hình vuông có 4 trục đối xứng: 2 đường chéo và 2 đường nối trung điểm các cạnh đối.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?',
      dap_an: '2 trục đối xứng (hai đường nối trung điểm các cạnh đối).',
    },
  ],
  ghi_nho: [
    'Trục đối xứng: gấp đôi, hai nửa trùng khít.',
    'Tam giác đều: 3 trục. Hình vuông: 4 trục. HCN: 2 trục.',
  ],
};

const C3_BAI_6_TAM_DOI_XUNG: LessonGuide = {
  bai_id: 'C3_BAI_6',
  chuong: 3,
  so_tiet: 2,
  tieu_de: 'Chương III - Bài 6: Hình có tâm đối xứng',
  muc_tieu: [
    'Nhận biết hình có tâm đối xứng',
    'Xác định tâm đối xứng của các hình cơ bản',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tâm đối xứng',
      noi_dung: [
        'Nếu quay hình 180° quanh một điểm mà hình trùng với chính nó, điểm đó là tâm đối xứng.',
        'Hình bình hành có tâm đối xứng là giao điểm hai đường chéo.',
        'Hình vuông, hình chữ nhật, hình thoi đều có tâm đối xứng.',
        'Hình tròn có tâm đối xứng là tâm của đường tròn.',
        'Tam giác đều KHÔNG có tâm đối xứng.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Hình bình hành có tâm đối xứng không? Nếu có, chỉ ra.',
      loi_giai: 'Có. Tâm đối xứng là giao điểm của hai đường chéo.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tam giác đều có tâm đối xứng không?',
      dap_an: 'Không. Tam giác đều chỉ có trục đối xứng, không có tâm đối xứng.',
    },
  ],
  ghi_nho: [
    'Tâm đối xứng: quay 180°, hình trùng với chính nó.',
    'HBH, HCN, hình vuông, hình thoi có tâm đối xứng.',
    'Tam giác đều KHÔNG có tâm đối xứng.',
  ],
};

const C3_BAI_7_DOI_XUNG_THUC_TIEN: LessonGuide = {
  bai_id: 'C3_BAI_7',
  chuong: 3,
  so_tiet: 2,
  tieu_de: 'Chương III - Bài 7: Đối xứng trong thực tiễn',
  muc_tieu: [
    'Nhận biết đối xứng trong các hình ảnh thực tế',
    'Áp dụng kiến thức đối xứng vào thực tiễn',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Đối xứng trong tự nhiên và đời sống',
      noi_dung: [
        'Nhiều vật thể trong tự nhiên có tính đối xứng: cánh bướm, lá cây, người, tòa nhà...',
        'Đối xứng trục: bướm gấp đôi theo trục dọc cơ thể.',
        'Đối xứng tâm: bông hoa nhìn từ trên xuống quay quanh tâm.',
        'Kiến trúc thường sử dụng đối xứng để tạo sự cân đối, thẩm mỹ.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm trục đối xứng của hình cánh bướm.',
      loi_giai: 'Trục đối xứng là đường thẳng dọc theo thân bướm, chia cánh trái và phải thành hai nửa đối xứng.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Kể tên 3 vật trong đời sống có tính đối xứng trục.',
      dap_an: 'Ví dụ: Cánh bướm, mặt người, chiếc lá (đối xứng theo gân lá), cửa sổ hai cánh...',
    },
  ],
  ghi_nho: [
    'Đối xứng có mặt khắp nơi trong tự nhiên và kiến trúc.',
    'Đối xứng tạo nên vẻ đẹp cân đối, hài hòa.',
  ],
};

// ============================================================
// EXPORT - Tất cả bài học HK1
// ============================================================

export const CANH_DIEU_TOAN_6_HK1_GUIDES: LessonGuide[] = [
  // Chương I: Số tự nhiên
  BAI_1_TAP_HOP,
  BAI_2_TAP_HOP_SO_TU_NHIEN,
  BAI_3_PHEP_CONG_TRU,
  BAI_4_PHEP_NHAN_CHIA,
  BAI_5_LUY_THUA,
  BAI_6_THU_TU_PHEP_TINH,
  BAI_7_CHIA_HET,
  BAI_8_DAU_HIEU_CHIA_HET_2_5,
  BAI_9_DAU_HIEU_CHIA_HET_3_9,
  BAI_10_SO_NGUYEN_TO,
  BAI_11_PHAN_TICH_THUA_SO,
  BAI_12_UCLN,
  BAI_13_BCNN,
  // Chương II: Số nguyên
  C2_BAI_1_SO_NGUYEN_AM,
  C2_BAI_2_TAP_HOP_SO_NGUYEN,
  C2_BAI_3_PHEP_CONG_SO_NGUYEN,
  C2_BAI_4_PHEP_TRU_QUY_TAC_NGOAC,
  C2_BAI_5_PHEP_NHAN_SO_NGUYEN,
  C2_BAI_6_PHEP_CHIA_SO_NGUYEN,
  // Chương III: Hình học trực quan
  C3_BAI_1_TAM_GIAC_DEU,
  C3_BAI_2_HCN_HINH_THOI,
  C3_BAI_3_HINH_BINH_HANH,
  C3_BAI_4_HINH_THANG_CAN,
  C3_BAI_5_TRUC_DOI_XUNG,
  C3_BAI_6_TAM_DOI_XUNG,
  C3_BAI_7_DOI_XUNG_THUC_TIEN,
];

// Mapping từ tên bài trong timeline sang bài hướng dẫn
export const TIMELINE_TO_GUIDE_MAP: Record<string, string> = {
  'Bài 1: Tập hợp (2 tiết)': 'C1_BAI_1',
  'Bài 2: Tập hợp các số tự nhiên (3 tiết - Tiết 1, 2)': 'C1_BAI_2',
  'Bài 2: Tập hợp các số tự nhiên (Tiết 3)': 'C1_BAI_2',
  'Bài 3: Phép cộng, phép trừ các số tự nhiên (2 tiết)': 'C1_BAI_3',
  'Bài 4: Phép nhân và phép chia số tự nhiên (2 tiết - Tiết 1)': 'C1_BAI_4',
  'Bài 4: Phép nhân và phép chia số tự nhiên (Tiết 2)': 'C1_BAI_4',
  'Bài 5: Phép tính lũy thừa với số mũ tự nhiên (3 tiết)': 'C1_BAI_5',
  'Bài 6: Thứ tự thực hiện các phép tính (2 tiết - Tiết 1)': 'C1_BAI_6',
  'Bài 6: Thứ tự thực hiện các phép tính (Tiết 2)': 'C1_BAI_6',
  'Bài 7: Quan hệ chia hết. Tính chất chia hết (4 tiết - Tiết 1, 2)': 'C1_BAI_7',
  'Bài 7: Quan hệ chia hết. Tính chất chia hết (Tiết 3, 4)': 'C1_BAI_7',
  'Bài 8: Dấu hiệu chia hết cho 2 và 5 (1 tiết)': 'C1_BAI_8',
  'Bài 9: Dấu hiệu chia hết cho 3 và 9 (1 tiết - Tiết 1)': 'C1_BAI_9',
  'Bài 9: Dấu hiệu chia hết cho 3 và 9 (Tiết 2)': 'C1_BAI_9',
  'Bài 10: Số nguyên tố - Hợp số (2 tiết)': 'C1_BAI_10',
  'Bài 11: Phân tích một số ra thừa số nguyên tố (2 tiết - Tiết 1)': 'C1_BAI_11',
  'Bài 11: Phân tích một số ra thừa số nguyên tố (Tiết 2)': 'C1_BAI_11',
  'Bài 12: Ưước chung và ước chung lớn nhất (3 tiết)': 'C1_BAI_12',
  'Bài 13: Bội chung và bội chung nhỏ nhất (3 tiết - Tiết 1)': 'C1_BAI_13',
  'Bài 13: Bội chung và bội chung nhỏ nhất (Tiết 2, 3)': 'C1_BAI_13',
  'Chương II - Bài 1: Số nguyên âm (1 tiết)': 'C2_BAI_1',
  'Chương II - Bài 2: Tập hợp các số nguyên (3 tiết - Tiết 1, 2)': 'C2_BAI_2',
  'Chương II - Bài 2: Tập hợp các số nguyên (Tiết 3)': 'C2_BAI_2',
  'Chương II - Bài 3: Phép cộng các số nguyên (3 tiết)': 'C2_BAI_3',
  'Chương II - Bài 4: Phép trừ số nguyên, quy tắc dấu ngoặc (2 tiết - Tiết 1)': 'C2_BAI_4',
  'Chương II - Bài 4: Phép trừ số nguyên, quy tắc dấu ngoặc (Tiết 2)': 'C2_BAI_4',
  'Chương II - Bài 5: Phép nhân các số nguyên (2 tiết)': 'C2_BAI_5',
  'Chương II - Bài 6: Phép chia hết hai số nguyên. Quan hệ chia hết (3 tiết - Tiết 1)': 'C2_BAI_6',
  'Chương II - Bài 6: Phép chia hết hai số nguyên (Tiết 2, 3)': 'C2_BAI_6',
  'Chương III - Bài 1: Tam giác đều. Hình vuông. Lục giác đều (3 tiết)': 'C3_BAI_1',
  'Chương III - Bài 2: Hình chữ nhật. Hình thoi (3 tiết - Tiết 1)': 'C3_BAI_2',
  'Chương III - Bài 2: Hình chữ nhật. Hình thoi (Tiết 2, 3)': 'C3_BAI_2',
  'Chương III - Bài 3: Hình bình hành (3 tiết - Tiết 1)': 'C3_BAI_3',
  'Chương III - Bài 3: Hình bình hành (Tiết 2, 3)': 'C3_BAI_3',
  'Chương III - Bài 4: Hình thang cân (3 tiết - Tiết 1)': 'C3_BAI_4',
  'Chương III - Bài 4: Hình thang cân (Tiết 2, 3)': 'C3_BAI_4',
  'Chương III - Bài 5: Hình có trục đối xứng (2 tiết)': 'C3_BAI_5',
  'Chương III - Bài 6: Hình có tâm đối xứng (2 tiết - Tiết 1)': 'C3_BAI_6',
  'Chương III - Bài 6: Hình có tâm đối xứng (Tiết 2)': 'C3_BAI_6',
  'Chương III - Bài 7: Đối xứng trong thực tiễn (2 tiết)': 'C3_BAI_7',
};

// Helper function to get guide by bai_id
export function getLessonGuide(baiId: string): LessonGuide | undefined {
  return CANH_DIEU_TOAN_6_HK1_GUIDES.find(g => g.bai_id === baiId);
}

// Helper function to get guide from timeline lesson name
export function getLessonGuideByTimelineName(tenBai: string): LessonGuide | undefined {
  const baiId = TIMELINE_TO_GUIDE_MAP[tenBai];
  if (!baiId) return undefined;
  return getLessonGuide(baiId);
}

// Helper function to get all guides for a chapter
export function getGuidesByChapter(chuong: number): LessonGuide[] {
  return CANH_DIEU_TOAN_6_HK1_GUIDES.filter(g => g.chuong === chuong);
}
