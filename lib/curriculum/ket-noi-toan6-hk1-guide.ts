// ============================================================
// HƯỚNG DẪN CHI TIẾT - TOÁN 6 HK1 - KẾT NỐI TRI THỨC
// Dữ liệu trích xuất từ Giáo án chính thức
// ============================================================

import { LessonGuide } from './canh-dieu-toan6-hk1-guide';

// ============================================================
// CHƯƠNG I: TẬP HỢP CÁC SỐ TỰ NHIÊN (§1 - §7)
// ============================================================

const BAI_1_TAP_HOP: LessonGuide = {
  bai_id: 'KN_G6_C1_B1',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 1: Tập hợp',
  muc_tieu: [
    'Nhận biết một tập hợp và các phần tử của nó',
    'Sử dụng kí hiệu ∈ (thuộc) và ∉ (không thuộc)',
    'Hiểu hai cách mô tả một tập hợp: liệt kê và chỉ ra tính chất đặc trưng',
    'Nhận biết tập hợp ℕ và ℕ*',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tập hợp và phần tử',
      noi_dung: [
        'Một tập hợp bao gồm những đối tượng nhất định. Các đối tượng ấy gọi là phần tử của tập hợp.',
        'x ∈ A: x là phần tử của A (x thuộc A)',
        'y ∉ A: y không là phần tử của A (y không thuộc A)',
      ],
    },
    {
      tieu_de: '2. Hai cách mô tả tập hợp',
      noi_dung: [
        'Cách 1 - Liệt kê: Viết các phần tử trong dấu { }, ngăn cách bởi dấu ";". Mỗi phần tử chỉ viết một lần.',
        'Cách 2 - Nêu tính chất đặc trưng: A = {x | x có tính chất P}',
        'ℕ = {0; 1; 2; 3; ...} là tập hợp các số tự nhiên',
        'ℕ* = {1; 2; 3; ...} là tập hợp các số tự nhiên khác 0',
      ],
    },
  ],
  cong_thuc: [
    'x ∈ A: x thuộc tập hợp A',
    'y ∉ A: y không thuộc tập hợp A',
    'ℕ = {0; 1; 2; 3; ...}',
    'ℕ* = {1; 2; 3; ...}',
  ],
  vi_du: [
    {
      de_bai: 'Mô tả tập hợp P gồm các số tự nhiên nhỏ hơn 6 bằng hai cách.',
      loi_giai: 'Cách 1: P = {0; 1; 2; 3; 4; 5}\nCách 2: P = {n ∈ ℕ | n < 6}',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Cho M = {7; 8; 9; 10}. Thay dấu ? bằng ∈ hoặc ∉: a) 5 ? M; b) 9 ? M.',
      dap_an: 'a) 5 ∉ M\nb) 9 ∈ M',
    },
    {
      de_bai: 'Viết tập hợp A các số tự nhiên nhỏ hơn 5 bằng cách liệt kê.',
      dap_an: 'A = {0; 1; 2; 3; 4}',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Cách viết tập hợp nào đúng?',
      dap_an: ['A = [1; 2; 3]', 'A = (1; 2; 3)', 'A = 1, 2, 3', 'A = {1; 2; 3}'],
      dap_an_dung: 3,
      giai_thich: 'Phần tử tập hợp viết trong dấu ngoặc nhọn { }.',
    },
    {
      cau_hoi: 'Cho B = {2; 3; 5; 7}. Khẳng định nào sai?',
      dap_an: ['2 ∈ B', '5 ∈ B', '1 ∉ B', '6 ∈ B'],
      dap_an_dung: 3,
      giai_thich: '6 không nằm trong B nên 6 ∈ B là sai.',
    },
    {
      cau_hoi: 'Tập hợp A = {6; 7; 8; 9} viết dưới dạng tính chất đặc trưng là:',
      dap_an: ['A = {x ∈ ℕ | 5 < x < 10}', 'A = {x ∈ ℕ | 6 < x < 10}', 'A = {x ∈ ℕ | 5 < x < 9}', 'A = {x ∈ ℕ | 6 ≤ x ≤ 10}'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Hai cách viết tập hợp: liệt kê hoặc nêu tính chất đặc trưng.',
    'Mỗi phần tử chỉ được viết một lần duy nhất.',
  ],
};

const BAI_2_CACH_GHI_SO: LessonGuide = {
  bai_id: 'KN_G6_C1_B2',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 2: Cách ghi số tự nhiên',
  muc_tieu: [
    'Nhận biết cách viết số tự nhiên trong hệ thập phân',
    'Nhận biết giá trị mỗi chữ số theo vị trí',
    'Đọc và viết được các số La Mã không quá 30',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Hệ thập phân',
      noi_dung: [
        'Dùng 10 chữ số: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 để ghi mọi số tự nhiên.',
        'Cứ 10 đơn vị ở một hàng = 1 đơn vị ở hàng liền trước.',
        'ab = a × 10 + b (a ≠ 0); abc = a × 100 + b × 10 + c (a ≠ 0)',
      ],
    },
    {
      tieu_de: '2. Số La Mã',
      noi_dung: [
        'Các kí hiệu: I = 1, V = 5, X = 10',
        'Từ 1 đến 10: I, II, III, IV, V, VI, VII, VIII, IX, X',
        'Từ 11-20: thêm X; Từ 21-30: thêm XX',
      ],
    },
  ],
  cong_thuc: [
    'ab = a × 10 + b (a ≠ 0)',
    'abc = a × 100 + b × 10 + c (a ≠ 0)',
  ],
  vi_du: [
    {
      de_bai: 'Viết số 236 thành tổng giá trị các chữ số.',
      loi_giai: '236 = 2 × 100 + 3 × 10 + 6',
    },
    {
      de_bai: 'Đọc số La Mã XXIV và viết 27 bằng số La Mã.',
      loi_giai: 'XXIV = 24 (XX = 20, IV = 4)\n27 = XXVII',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết 18, 25 bằng số La Mã.',
      dap_an: '18: XVIII; 25: XXV',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Số La Mã XXIX biểu diễn số nào?',
      dap_an: ['29', '31', '19', '39'],
      dap_an_dung: 0,
      giai_thich: 'XX = 20, IX = 9, nên XXIX = 29.',
    },
    {
      cau_hoi: 'Giá trị chữ số 5 trong số 3 507 là:',
      dap_an: ['5', '50', '500', '5 000'],
      dap_an_dung: 2,
      giai_thich: 'Chữ số 5 nằm ở hàng trăm nên có giá trị 500.',
    },
  ],
  ghi_nho: [
    'Hệ thập phân: giá trị mỗi chữ số phụ thuộc vào vị trí của nó.',
    'Số La Mã từ 1 đến 30: dùng I, V, X.',
  ],
};

const BAI_3_THU_TU: LessonGuide = {
  bai_id: 'KN_G6_C1_B3',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 3: Thứ tự trong tập hợp các số tự nhiên',
  muc_tieu: [
    'Nhận biết tia số và biểu diễn số tự nhiên trên tia số',
    'So sánh được hai số tự nhiên',
    'Tìm số liền trước, số liền sau của một số tự nhiên',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Thứ tự các số tự nhiên',
      noi_dung: [
        'Trên tia số nằm ngang, số nhỏ hơn nằm bên trái số lớn hơn.',
        'Mỗi số tự nhiên có đúng một số liền sau. Số 0 không có số liền trước.',
        'Tính bắc cầu: a < b và b < c thì a < c.',
        'Kí hiệu: a ≤ b nghĩa là a < b hoặc a = b.',
      ],
    },
  ],
  cong_thuc: [
    'a < b và b < c ⇒ a < c',
    'a ≤ b và b ≤ c ⇒ a ≤ c',
  ],
  vi_du: [
    {
      de_bai: 'Viết tập hợp A = {x ∈ ℕ | x < 4} và B = {x ∈ ℕ | x ≤ 4}.',
      loi_giai: 'A = {0; 1; 2; 3}\nB = {0; 1; 2; 3; 4}',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết tập hợp các số tự nhiên x sao cho 9 < x < 15.',
      dap_an: 'M = {10; 11; 12; 13; 14}',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khẳng định nào sai?',
      dap_an: ['Số 0 là số tự nhiên nhỏ nhất', 'Mọi số tự nhiên đều có số liền trước', 'Nếu a < b và b < c thì a < c', 'Số liền sau của 99 là 100'],
      dap_an_dung: 1,
      giai_thich: 'Số 0 không có số tự nhiên liền trước.',
    },
  ],
  ghi_nho: [
    'Số 0 là số tự nhiên nhỏ nhất, không có số liền trước.',
    'Trên tia số, số bé nằm bên trái số lớn.',
  ],
};

const BAI_4_CONG_TRU: LessonGuide = {
  bai_id: 'KN_G6_C1_B4',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 4: Phép cộng và phép trừ số tự nhiên',
  muc_tieu: [
    'Vận dụng tính chất giao hoán, kết hợp để tính nhẩm, tính hợp lí',
    'Thực hiện phép trừ trong tập số tự nhiên (a ≥ b)',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép cộng',
      noi_dung: [
        'Giao hoán: a + b = b + a',
        'Kết hợp: (a + b) + c = a + (b + c)',
        'Cộng với 0: a + 0 = a',
      ],
    },
    {
      tieu_de: '2. Phép trừ',
      noi_dung: [
        'a - b = c ⇔ a = b + c (điều kiện a ≥ b)',
        'Phép trừ chỉ thực hiện được khi số bị trừ ≥ số trừ.',
      ],
    },
  ],
  cong_thuc: ['a + b = b + a', '(a + b) + c = a + (b + c)', 'a - b = c ⇔ a = b + c (a ≥ b)'],
  vi_du: [
    {
      de_bai: 'Tính hợp lí: 66 + 289 + 134 + 311.',
      loi_giai: '= (66 + 134) + (289 + 311) = 200 + 600 = 800',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính hợp lí: 285 + 470 + 115 + 230.',
      dap_an: '(285 + 115) + (470 + 230) = 400 + 700 = 1100',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Phép trừ nào không thực hiện được trong ℕ?',
      dap_an: ['100 - 99', '50 - 50', '34 693 - 129 107', '129 107 - 34 693'],
      dap_an_dung: 2,
      giai_thich: '34 693 < 129 107 nên không trừ được trong ℕ.',
    },
  ],
  ghi_nho: [
    'Tính chất giao hoán, kết hợp giúp nhóm các số thành số tròn.',
    'Trong ℕ, phép trừ chỉ thực hiện được khi số bị trừ ≥ số trừ.',
  ],
};

const BAI_5_NHAN_CHIA: LessonGuide = {
  bai_id: 'KN_G6_C1_B5',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 5: Phép nhân và phép chia số tự nhiên',
  muc_tieu: [
    'Nhận biết tính chất giao hoán, kết hợp, phân phối của phép nhân',
    'Thực hiện phép chia hết và phép chia có dư',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép nhân',
      noi_dung: [
        'Giao hoán: a.b = b.a',
        'Kết hợp: (a.b).c = a.(b.c)',
        'Phân phối: a.(b + c) = a.b + a.c',
        'a.1 = a; a.0 = 0',
      ],
    },
    {
      tieu_de: '2. Phép chia',
      noi_dung: [
        'a = b.q + r (0 ≤ r < b)',
        'r = 0: phép chia hết; r ≠ 0: phép chia có dư',
      ],
    },
  ],
  cong_thuc: ['a.b = b.a', '(a.b).c = a.(b.c)', 'a.(b + c) = a.b + a.c', 'a = b.q + r (0 ≤ r < b)'],
  vi_du: [
    {
      de_bai: 'Tính nhẩm: 24 × 25.',
      loi_giai: '24 × 25 = (6 × 4) × 25 = 6 × 100 = 600',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhẩm: 125 × 8001 × 8.',
      dap_an: '(125 × 8) × 8001 = 1000 × 8001 = 8 001 000',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Trong phép chia có dư, số dư r so với số chia b thỏa mãn:',
      dap_an: ['r > b', 'r = b', '0 < r < b', '0 ≤ r < b'],
      dap_an_dung: 2,
      giai_thich: 'Phép chia có dư nên r > 0, và luôn có r < b.',
    },
  ],
  ghi_nho: [
    'Tính chất phân phối giúp tính nhẩm hiệu quả.',
    'Trong phép chia có dư, số dư luôn nhỏ hơn số chia.',
  ],
};

const BAI_6_LUY_THUA: LessonGuide = {
  bai_id: 'KN_G6_C1_B6',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 6: Lũy thừa với số mũ tự nhiên',
  muc_tieu: [
    'Nhận biết biểu thức lũy thừa, cơ số, số mũ',
    'Viết tích các thừa số bằng nhau dưới dạng lũy thừa',
    'Vận dụng quy tắc nhân, chia hai lũy thừa cùng cơ số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép nâng lên lũy thừa',
      noi_dung: [
        'aⁿ = a × a × ... × a (n thừa số a)',
        'a là cơ số, n là số mũ. Quy ước: a¹ = a',
        'a² gọi là bình phương; a³ gọi là lập phương',
      ],
    },
    {
      tieu_de: '2. Nhân và chia lũy thừa cùng cơ số',
      noi_dung: [
        'aᵐ × aⁿ = aᵐ⁺ⁿ (giữ cơ số, cộng số mũ)',
        'aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0, m ≥ n)',
        'Quy ước: a⁰ = 1 (a ≠ 0)',
      ],
    },
  ],
  cong_thuc: ['aⁿ = a × a × ... × a (n thừa số)', 'aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0, m ≥ n)', 'a⁰ = 1 (a ≠ 0)'],
  vi_du: [
    {
      de_bai: 'Tính: a) 5⁶ × 5³; b) 10⁷ : 10⁴.',
      loi_giai: 'a) 5⁶ × 5³ = 5⁹\nb) 10⁷ : 10⁴ = 10³ = 1000',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết dưới dạng lũy thừa: a) 5³ × 5⁷; b) 2⁴ × 2⁵ × 2⁹.',
      dap_an: 'a) 5¹⁰\nb) 2¹⁸',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Giá trị của 2⁵ là:',
      dap_an: ['10', '25', '32', '16'],
      dap_an_dung: 2,
      giai_thich: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.',
    },
    {
      cau_hoi: 'Kết quả 2⁴ × 2⁵ : 2³ dưới dạng lũy thừa:',
      dap_an: ['2⁶', '2¹²', '2⁹', '2³'],
      dap_an_dung: 0,
      giai_thich: '2⁴⁺⁵⁻³ = 2⁶.',
    },
  ],
  ghi_nho: [
    'Nhân lũy thừa cùng cơ số: cộng số mũ.',
    'Chia lũy thừa cùng cơ số: trừ số mũ.',
    'a⁰ = 1 (a ≠ 0).',
  ],
};

const BAI_7_THU_TU_PHEP_TINH: LessonGuide = {
  bai_id: 'KN_G6_C1_B7',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 7: Thứ tự thực hiện các phép tính',
  muc_tieu: [
    'Nắm quy tắc thứ tự thực hiện phép tính không ngoặc và có ngoặc',
    'Tính giá trị biểu thức số và biểu thức chữ',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Không có ngoặc',
      noi_dung: [
        'Chỉ cộng trừ (hoặc nhân chia): tính từ trái sang phải.',
        'Có cộng, trừ, nhân, chia, lũy thừa: Lũy thừa → Nhân, chia → Cộng, trừ.',
      ],
    },
    {
      tieu_de: '2. Có dấu ngoặc',
      noi_dung: [
        'Thực hiện trong ngoặc trước: ( ) → [ ] → { }',
      ],
    },
  ],
  cong_thuc: ['Thứ tự: Lũy thừa → Nhân, chia → Cộng, trừ', 'Ngoặc: ( ) → [ ] → { }'],
  vi_du: [
    {
      de_bai: 'Tính: [1 + 2 × (5 × 3 - 2³)] × 7.',
      loi_giai: '= [1 + 2 × (15 - 8)] × 7 = [1 + 2 × 7] × 7 = [1 + 14] × 7 = 15 × 7 = 105',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: 25 × 2³ - 3² + 125.',
      dap_an: '25 × 8 - 9 + 125 = 200 - 9 + 125 = 316',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Giá trị 5 + 3 × 2 bằng:',
      dap_an: ['16', '11', '10', '13'],
      dap_an_dung: 1,
      giai_thich: 'Nhân trước: 3 × 2 = 6, cộng sau: 5 + 6 = 11.',
    },
  ],
  ghi_nho: [
    'Nhân chia trước, cộng trừ sau; Lũy thừa trước nhất.',
    'Có ngoặc: ( ) trước, [ ] sau, { } cuối.',
  ],
};

// ============================================================
// CHƯƠNG II: TÍNH CHẤT CHIA HẾT (§8 - §12)
// ============================================================

const BAI_8_CHIA_HET: LessonGuide = {
  bai_id: 'KN_G6_C2_B8',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Bài 8: Quan hệ chia hết và tính chất',
  muc_tieu: [
    'Nhận biết quan hệ chia hết, ước và bội',
    'Tìm ước và bội của một số tự nhiên',
    'Áp dụng tính chất chia hết của một tổng',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Quan hệ chia hết, ước và bội',
      noi_dung: [
        'a chia hết cho b (a ⋮ b) nếu có k sao cho a = k.b',
        'b là ước của a, a là bội của b',
        'Ư(a): tập hợp các ước của a; B(b): tập hợp các bội của b',
      ],
    },
    {
      tieu_de: '2. Tính chất chia hết của tổng',
      noi_dung: [
        'Nếu a ⋮ m và b ⋮ m thì (a + b) ⋮ m',
        'Nếu a không chia hết cho m, b ⋮ m thì (a + b) không chia hết cho m',
        'Tính chất tương tự áp dụng cho hiệu.',
      ],
    },
  ],
  cong_thuc: ['a ⋮ b ⇔ a = k.b', 'a ⋮ m, b ⋮ m ⇒ (a ± b) ⋮ m'],
  vi_du: [
    {
      de_bai: 'Tìm Ư(15) và các bội của 6 nhỏ hơn 30.',
      loi_giai: 'Ư(15) = {1; 3; 5; 15}\nCác bội của 6 nhỏ hơn 30: {0; 6; 12; 18; 24}',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm Ư(20) và các bội nhỏ hơn 50 của 4.',
      dap_an: 'Ư(20) = {1; 2; 4; 5; 10; 20}\nCác bội: {0; 4; 8; 12; 16; 20; 24; 28; 32; 36; 40; 44; 48}',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tập hợp các ước của 12 là:',
      dap_an: ['{1; 2; 3; 4; 6; 12}', '{0; 1; 2; 3; 4; 6; 12}', '{2; 3; 4; 6}', '{1; 2; 3; 4; 6}'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Ước của a: các số mà a chia hết cho.',
    'Bội của b: nhân b với 0, 1, 2, 3, ...',
    'Tất cả số hạng ⋮ m ⇒ tổng ⋮ m.',
  ],
};

const BAI_9_DAU_HIEU_CHIA_HET: LessonGuide = {
  bai_id: 'KN_G6_C2_B9',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Bài 9: Dấu hiệu chia hết',
  muc_tieu: [
    'Nhận biết dấu hiệu chia hết cho 2, 5, 3 và 9',
    'Xác định nhanh một số có chia hết cho 2, 5, 3, 9 hay không',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Dấu hiệu chia hết cho 2 và 5',
      noi_dung: [
        'Chia hết cho 2: chữ số tận cùng là 0, 2, 4, 6, 8',
        'Chia hết cho 5: chữ số tận cùng là 0 hoặc 5',
        'Chia hết cho cả 2 và 5: tận cùng là 0',
      ],
    },
    {
      tieu_de: '2. Dấu hiệu chia hết cho 9 và 3',
      noi_dung: [
        'Chia hết cho 9: tổng các chữ số chia hết cho 9',
        'Chia hết cho 3: tổng các chữ số chia hết cho 3',
        'Chia hết cho 9 ⇒ chia hết cho 3 (ngược lại chưa chắc đúng)',
      ],
    },
  ],
  cong_thuc: [
    'Chia hết cho 2 ⇔ tận cùng ∈ {0; 2; 4; 6; 8}',
    'Chia hết cho 5 ⇔ tận cùng ∈ {0; 5}',
    'Chia hết cho 9 ⇔ tổng chữ số ⋮ 9',
    'Chia hết cho 3 ⇔ tổng chữ số ⋮ 3',
  ],
  vi_du: [
    {
      de_bai: 'Xét 12 492 có chia hết cho 9 không.',
      loi_giai: 'Tổng chữ số: 1 + 2 + 4 + 9 + 2 = 18. Vì 18 ⋮ 9 nên 12 492 ⋮ 9.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Thay * bằng chữ số để 12*5 chia hết cho 3.',
      dap_an: 'Tổng = 8 + *. Để ⋮ 3: * ∈ {1; 4; 7}. Các số: 1215, 1245, 1275.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Số 2025 chia hết cho những số nào: 2, 3, 5, 9?',
      dap_an: ['3 và 5', '5 và 9', '3, 5 và 9', '2, 3, 5 và 9'],
      dap_an_dung: 2,
      giai_thich: 'Tận cùng 5 ⇒ ⋮ 5. Tổng chữ số 2+0+2+5=9 ⇒ ⋮ 9 và ⋮ 3. Nhưng không ⋮ 2.',
    },
  ],
  ghi_nho: [
    'Chia hết cho 2, 5: xét chữ số tận cùng.',
    'Chia hết cho 3, 9: xét tổng các chữ số.',
  ],
};

const BAI_10_SO_NGUYEN_TO: LessonGuide = {
  bai_id: 'KN_G6_C2_B10',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Bài 10: Số nguyên tố',
  muc_tieu: [
    'Nhận biết số nguyên tố và hợp số',
    'Phân tích một số ra thừa số nguyên tố',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Số nguyên tố, hợp số',
      noi_dung: [
        'Số nguyên tố: số tự nhiên > 1, chỉ có 2 ước là 1 và chính nó.',
        'Hợp số: số tự nhiên > 1, có nhiều hơn 2 ước.',
        'Số 0 và 1 không phải số nguyên tố, cũng không phải hợp số.',
      ],
    },
    {
      tieu_de: '2. Phân tích ra thừa số nguyên tố',
      noi_dung: [
        'Viết số dưới dạng tích các thừa số nguyên tố.',
        'Hai cách: sơ đồ cây hoặc sơ đồ cột.',
        'Viết theo thứ tự từ bé đến lớn, dùng lũy thừa cho thừa số giống nhau.',
      ],
    },
  ],
  cong_thuc: ['a = p₁ᵏ¹ × p₂ᵏ² × ... × pₙᵏⁿ'],
  vi_du: [
    {
      de_bai: 'Phân tích 24 ra thừa số nguyên tố.',
      loi_giai: '24 = 2³ × 3',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Phân tích 60 và 84 ra thừa số nguyên tố.',
      dap_an: '60 = 2² × 3 × 5\n84 = 2² × 3 × 7',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Số nguyên tố nhỏ nhất là:',
      dap_an: ['0', '1', '2', '3'],
      dap_an_dung: 2,
    },
    {
      cau_hoi: 'Kết quả phân tích 120 ra TSNT đúng là:',
      dap_an: ['2³ × 15', '2³ × 3 × 5', '2² × 30', '8 × 15'],
      dap_an_dung: 1,
      giai_thich: '15 không phải số nguyên tố. Đúng: 120 = 2³ × 3 × 5.',
    },
  ],
  ghi_nho: [
    '0 và 1 không phải SNT cũng không phải hợp số.',
    'Phân tích ra TSNT: viết tích các lũy thừa của SNT.',
  ],
};

const BAI_11_UCLN: LessonGuide = {
  bai_id: 'KN_G6_C2_B11',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Bài 11: Ước chung, ước chung lớn nhất',
  muc_tieu: [
    'Nhận biết ước chung (ƯC) và ước chung lớn nhất (ƯCLN)',
    'Tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Ước chung',
      noi_dung: [
        'ƯC(a, b) là tập hợp các ước chung của a và b.',
        'x ∈ ƯC(a, b) ⇔ a ⋮ x và b ⋮ x',
      ],
    },
    {
      tieu_de: '2. ƯCLN',
      noi_dung: [
        'ƯCLN(a, b) là số lớn nhất trong ƯC(a, b).',
        'Cách tìm ƯCLN: (1) Phân tích ra TSNT; (2) Chọn thừa số nguyên tố chung; (3) Lấy số mũ nhỏ nhất; (4) Nhân lại.',
        'Nếu ƯCLN(a, b) = 1 thì a, b gọi là nguyên tố cùng nhau.',
      ],
    },
  ],
  cong_thuc: ['ƯCLN: chọn TSNT chung, lấy số mũ nhỏ nhất'],
  vi_du: [
    {
      de_bai: 'Tìm ƯCLN(24, 36).',
      loi_giai: '24 = 2³ × 3; 36 = 2² × 3².\nƯCLN(24, 36) = 2² × 3 = 12',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm ƯCLN(12, 30, 42).',
      dap_an: '12 = 2² × 3; 30 = 2 × 3 × 5; 42 = 2 × 3 × 7.\nƯCLN = 2 × 3 = 6',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'ƯCLN(18, 24) bằng:',
      dap_an: ['2', '3', '6', '12'],
      dap_an_dung: 2,
      giai_thich: '18 = 2 × 3²; 24 = 2³ × 3. ƯCLN = 2 × 3 = 6.',
    },
  ],
  ghi_nho: [
    'ƯCLN: phân tích ra TSNT → chọn chung → số mũ nhỏ nhất → nhân.',
    'ƯCLN = 1: hai số nguyên tố cùng nhau.',
  ],
};

const BAI_12_BCNN: LessonGuide = {
  bai_id: 'KN_G6_C2_B12',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Bài 12: Bội chung, bội chung nhỏ nhất',
  muc_tieu: [
    'Nhận biết bội chung (BC) và bội chung nhỏ nhất (BCNN)',
    'Tìm BCNN bằng cách phân tích ra thừa số nguyên tố',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Bội chung',
      noi_dung: [
        'BC(a, b) là tập hợp các bội chung của a và b.',
        'x ∈ BC(a, b) ⇔ x ⋮ a và x ⋮ b',
      ],
    },
    {
      tieu_de: '2. BCNN',
      noi_dung: [
        'BCNN(a, b) là số nhỏ nhất khác 0 trong BC(a, b).',
        'Cách tìm BCNN: (1) Phân tích ra TSNT; (2) Chọn tất cả TSNT (chung và riêng); (3) Lấy số mũ lớn nhất; (4) Nhân lại.',
      ],
    },
  ],
  cong_thuc: ['BCNN: chọn tất cả TSNT, lấy số mũ lớn nhất'],
  vi_du: [
    {
      de_bai: 'Tìm BCNN(8, 12).',
      loi_giai: '8 = 2³; 12 = 2² × 3.\nBCNN(8, 12) = 2³ × 3 = 24',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm BCNN(6, 8, 15).',
      dap_an: '6 = 2 × 3; 8 = 2³; 15 = 3 × 5.\nBCNN = 2³ × 3 × 5 = 120',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'BCNN(4, 6) bằng:',
      dap_an: ['6', '12', '24', '2'],
      dap_an_dung: 1,
      giai_thich: '4 = 2²; 6 = 2 × 3. BCNN = 2² × 3 = 12.',
    },
  ],
  ghi_nho: [
    'BCNN: phân tích ra TSNT → lấy tất cả → số mũ lớn nhất → nhân.',
    'ƯCLN × BCNN = a × b (khi tìm cho 2 số).',
  ],
};

// ============================================================
// CHƯƠNG III: SỐ NGUYÊN (§13 - §17)
// ============================================================

const BAI_13_SO_NGUYEN: LessonGuide = {
  bai_id: 'KN_G6_C3_B13',
  chuong: 3,
  so_tiet: 2,
  tieu_de: 'Bài 13: Tập hợp các số nguyên',
  muc_tieu: [
    'Nhận biết số nguyên dương, số nguyên âm',
    'Biểu diễn số nguyên trên trục số',
    'So sánh hai số nguyên',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Số nguyên âm và tập hợp ℤ',
      noi_dung: [
        'Số nguyên dương: 1, 2, 3, ... Số nguyên âm: -1, -2, -3, ...',
        'ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
        'Số 0 không là số nguyên dương, cũng không là số nguyên âm.',
      ],
    },
    {
      tieu_de: '2. Thứ tự trong ℤ',
      noi_dung: [
        'Trên trục số, điểm a nằm trước điểm b ⇒ a < b.',
        'Mọi số nguyên âm < 0 < mọi số nguyên dương.',
        'Nếu a, b > 0 và a > b thì -a < -b.',
      ],
    },
  ],
  cong_thuc: ['ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}', 'a > b > 0 ⇒ -a < -b'],
  vi_du: [
    {
      de_bai: 'So sánh: a) 10 và -29; b) -57 và -1.',
      loi_giai: 'a) 10 > 0 > -29 nên -29 < 10.\nb) 57 > 1 nên -57 < -1.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Sắp xếp tăng dần: -11; -4; -3; 0; 2; 5; 9.',
      dap_an: '-11; -4; -3; 0; 2; 5; 9.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tập hợp số nguyên kí hiệu là:',
      dap_an: ['ℕ', 'ℤ', 'ℙ', 'ℚ'],
      dap_an_dung: 1,
    },
    {
      cau_hoi: 'So sánh -15 và -12:',
      dap_an: ['-15 > -12', '-15 < -12', '-15 = -12', 'Không so sánh được'],
      dap_an_dung: 1,
      giai_thich: '15 > 12 nên -15 < -12.',
    },
  ],
  ghi_nho: [
    'ℤ gồm số nguyên âm, 0, số nguyên dương.',
    'Trên trục số: bên trái nhỏ hơn bên phải.',
  ],
};

const BAI_14_CONG_TRU_NGUYEN: LessonGuide = {
  bai_id: 'KN_G6_C3_B14',
  chuong: 3,
  so_tiet: 3,
  tieu_de: 'Bài 14: Phép cộng và phép trừ số nguyên',
  muc_tieu: [
    'Cộng hai số nguyên cùng dấu, khác dấu',
    'Nhận biết số đối, tính chất phép cộng',
    'Thực hiện phép trừ: a - b = a + (-b)',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Cộng hai số nguyên cùng dấu âm',
      noi_dung: [
        'Cộng phần số tự nhiên rồi đặt dấu "-" trước kết quả.',
        '(-a) + (-b) = -(a + b)',
      ],
    },
    {
      tieu_de: '2. Cộng hai số nguyên khác dấu',
      noi_dung: [
        'Số đối: a + (-a) = 0. Số đối của 0 là 0.',
        'Hai số khác dấu không đối nhau: tìm hiệu phần tự nhiên, đặt dấu của số có phần tự nhiên lớn hơn.',
      ],
    },
    {
      tieu_de: '3. Phép trừ',
      noi_dung: ['a - b = a + (-b)'],
    },
  ],
  cong_thuc: ['(-a) + (-b) = -(a + b)', 'a + (-a) = 0', 'a - b = a + (-b)'],
  vi_du: [
    {
      de_bai: 'Tính: a) 5 - (-3); b) (-7) - 8.',
      loi_giai: 'a) 5 - (-3) = 5 + 3 = 8\nb) (-7) - 8 = (-7) + (-8) = -15',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: (-12) + (-48).',
      dap_an: '-(12 + 48) = -60',
    },
    {
      de_bai: 'Tính nhẩm: (-2) + 5 + (-6) + 9.',
      dap_an: '[(-2) + (-6)] + (5 + 9) = -8 + 14 = 6',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Kết quả (-15) + (-25):',
      dap_an: ['-10', '10', '-40', '40'],
      dap_an_dung: 2,
    },
    {
      cau_hoi: 'Kết quả 15 - (-20):',
      dap_an: ['-5', '5', '-35', '35'],
      dap_an_dung: 3,
      giai_thich: '15 - (-20) = 15 + 20 = 35.',
    },
  ],
  ghi_nho: [
    'Cùng dấu âm: cộng phần tự nhiên, đặt dấu âm.',
    'Khác dấu: hiệu phần tự nhiên, dấu của số có phần tự nhiên lớn hơn.',
    'a - b = a + (-b).',
  ],
};

const BAI_15_DAU_NGOAC: LessonGuide = {
  bai_id: 'KN_G6_C3_B15',
  chuong: 3,
  so_tiet: 1,
  tieu_de: 'Bài 15: Quy tắc dấu ngoặc',
  muc_tieu: [
    'Nhận biết và vận dụng quy tắc dấu ngoặc',
  ],
  kien_thuc: [
    {
      tieu_de: 'Quy tắc bỏ dấu ngoặc',
      noi_dung: [
        'Dấu "+" đứng trước: giữ nguyên dấu: +(a - b + c) = a - b + c',
        'Dấu "-" đứng trước: đổi dấu tất cả: -(a - b + c) = -a + b - c',
      ],
    },
  ],
  cong_thuc: ['+(a - b + c) = a - b + c', '-(a - b + c) = -a + b - c'],
  vi_du: [
    {
      de_bai: 'Tính: (317 - 912) + 912.',
      loi_giai: '= 317 - 912 + 912 = 317',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: (72 - 1956) - (-1956 + 28).',
      dap_an: '72 - 1956 + 1956 - 28 = 72 - 28 = 44',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Bỏ ngoặc -(-x + y - z) được:',
      dap_an: ['-x + y - z', 'x - y + z', 'x + y - z', '-x - y + z'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Dấu "+" trước ngoặc: giữ nguyên.',
    'Dấu "-" trước ngoặc: đổi tất cả dấu.',
  ],
};

const BAI_16_NHAN_NGUYEN: LessonGuide = {
  bai_id: 'KN_G6_C3_B16',
  chuong: 3,
  so_tiet: 2,
  tieu_de: 'Bài 16: Phép nhân số nguyên',
  muc_tieu: [
    'Nhận biết quy tắc nhân hai số nguyên cùng dấu, khác dấu',
    'Vận dụng tính chất phép nhân',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Nhân hai số nguyên khác dấu',
      noi_dung: [
        'Nhân phần tự nhiên, đặt dấu "-": kết quả âm.',
      ],
    },
    {
      tieu_de: '2. Nhân hai số nguyên cùng dấu',
      noi_dung: [
        'Nhân phần tự nhiên: kết quả dương.',
        'a × 0 = 0',
      ],
    },
    {
      tieu_de: '3. Tính chất',
      noi_dung: [
        'Giao hoán, kết hợp, phân phối đối với cộng và trừ.',
      ],
    },
  ],
  cong_thuc: ['Khác dấu: tích âm', 'Cùng dấu: tích dương', 'a.0 = 0', 'a.(b+c) = a.b + a.c'],
  vi_du: [
    {
      de_bai: 'Tính: a) 25.(-4); b) (-10).(-15).',
      loi_giai: 'a) 25.(-4) = -100\nb) (-10).(-15) = 150',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhẩm: (-25).(-17).4.',
      dap_an: '[(-25).4].(-17) = (-100).(-17) = 1700',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tích hai số nguyên âm là số:',
      dap_an: ['Âm', 'Dương', 'Có thể âm hoặc dương', 'Bằng 0'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Cùng dấu: tích dương. Khác dấu: tích âm.',
    'a × 0 = 0.',
  ],
};

const BAI_17_CHIA_HET_NGUYEN: LessonGuide = {
  bai_id: 'KN_G6_C3_B17',
  chuong: 3,
  so_tiet: 1,
  tieu_de: 'Bài 17: Phép chia hết. Ước và bội của một số nguyên',
  muc_tieu: [
    'Nhận biết phép chia hết trong ℤ',
    'Tìm ước và bội của một số nguyên',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép chia hết',
      noi_dung: [
        'a chia hết cho b (b ≠ 0) nếu a = b.q',
        'Quy tắc dấu: cùng dấu → thương dương; khác dấu → thương âm.',
      ],
    },
    {
      tieu_de: '2. Ước và bội trong ℤ',
      noi_dung: [
        'Nếu b là ước của a thì -b cũng là ước của a.',
        'Nếu a là bội của b thì -a cũng là bội của b.',
      ],
    },
  ],
  cong_thuc: ['a = b.q ⇔ a : b = q', 'Ư(a) = {ước dương và ước âm}'],
  vi_du: [
    {
      de_bai: 'Tìm tất cả các ước của 4.',
      loi_giai: 'Ước dương: 1, 2, 4. Vậy Ư(4) = {-4; -2; -1; 1; 2; 4}',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: (-63) : 9 và (-24) : (-8).',
      dap_an: '(-63) : 9 = -7; (-24) : (-8) = 3',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Kết quả (-48) : (-8):',
      dap_an: ['-6', '6', '-40', '40'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Cùng dấu: thương dương. Khác dấu: thương âm.',
    'Ước của a gồm cả ước dương và ước âm.',
  ],
};

// ============================================================
// CHƯƠNG IV: HÌNH PHẲNG TRONG THỰC TIỄN (§18 - §20)
// ============================================================

const BAI_18_HINH_DEU: LessonGuide = {
  bai_id: 'KN_G6_C4_B18',
  chuong: 4,
  so_tiet: 3,
  tieu_de: 'Bài 18: Hình tam giác đều. Hình vuông. Hình lục giác đều',
  muc_tieu: [
    'Nhận dạng tam giác đều, hình vuông, lục giác đều',
    'Mô tả yếu tố cơ bản: cạnh, góc, đường chéo',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tam giác đều',
      noi_dung: ['3 cạnh bằng nhau, 3 góc bằng nhau = 60°.'],
    },
    {
      tieu_de: '2. Hình vuông',
      noi_dung: ['4 cạnh bằng nhau, 4 góc = 90°, 2 đường chéo bằng nhau.'],
    },
    {
      tieu_de: '3. Lục giác đều',
      noi_dung: ['6 cạnh bằng nhau, 6 góc = 120°, 3 đường chéo chính bằng nhau.'],
    },
  ],
  cong_thuc: ['Góc tam giác đều = 60°', 'Góc hình vuông = 90°', 'Góc lục giác đều = 120°'],
  vi_du: [
    {
      de_bai: 'Trình bày cách vẽ hình vuông ABCD cạnh 4cm.',
      loi_giai: 'Vẽ AB = 4cm → Vuông góc tại A lấy AD = 4cm → Vuông góc tại B lấy BC = 4cm → Nối CD.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Một lục giác đều tâm O gồm bao nhiêu tam giác đều?',
      dap_an: '6 tam giác đều: ABO, BCO, CDO, DEO, EFO, FAO.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Lục giác đều có bao nhiêu đường chéo chính?',
      dap_an: ['3', '6', '9', '12'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Tam giác đều: 3 cạnh =, 3 góc 60°.',
    'Hình vuông: 4 cạnh =, 4 góc 90°.',
    'Lục giác đều: 6 cạnh =, 6 góc 120°.',
  ],
};

const BAI_19_TU_GIAC: LessonGuide = {
  bai_id: 'KN_G6_C4_B19',
  chuong: 4,
  so_tiet: 3,
  tieu_de: 'Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân',
  muc_tieu: [
    'Nhận dạng hình chữ nhật, hình thoi, hình bình hành, hình thang cân',
    'Mô tả yếu tố cơ bản của các hình',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Hình chữ nhật',
      noi_dung: ['4 góc = 90°, cạnh đối bằng nhau, 2 đường chéo bằng nhau.'],
    },
    {
      tieu_de: '2. Hình thoi',
      noi_dung: ['4 cạnh bằng nhau, 2 đường chéo vuông góc, cạnh đối song song, góc đối bằng nhau.'],
    },
    {
      tieu_de: '3. Hình bình hành',
      noi_dung: ['Cạnh đối bằng nhau và song song, đường chéo cắt nhau tại trung điểm.'],
    },
    {
      tieu_de: '4. Hình thang cân',
      noi_dung: ['Đáy song song, cạnh bên bằng nhau, đường chéo bằng nhau, góc kề đáy bằng nhau.'],
    },
  ],
  vi_du: [
    {
      de_bai: 'Vẽ hình chữ nhật ABCD có AB = 5cm, BC = 3cm.',
      loi_giai: 'Vẽ AB = 5cm → Vuông góc tại A lấy AD = 3cm → Vuông góc tại B lấy BC = 3cm → Nối DC.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Hình thoi có tính chất gì đặc biệt về đường chéo?',
      dap_an: 'Hai đường chéo vuông góc với nhau.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tính chất đúng với hình thoi:',
      dap_an: ['4 góc = 90°', '2 đường chéo song song', '2 đường chéo vuông góc', '2 cạnh bên ='],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'HCN: 4 góc 90°, cạnh đối =, đường chéo =.',
    'Hình thoi: 4 cạnh =, đường chéo vuông góc.',
    'HBH: cạnh đối = và song song.',
    'Thang cân: cạnh bên =, đường chéo =, góc kề đáy =.',
  ],
};

const BAI_20_CHU_VI_DIEN_TICH: LessonGuide = {
  bai_id: 'KN_G6_C4_B20',
  chuong: 4,
  so_tiet: 3,
  tieu_de: 'Bài 20: Chu vi và diện tích của một số tứ giác đã học',
  muc_tieu: [
    'Nhớ và áp dụng công thức tính chu vi, diện tích các hình',
    'Giải bài toán thực tiễn liên quan',
  ],
  kien_thuc: [
    {
      tieu_de: 'Công thức',
      noi_dung: [
        'Hình vuông cạnh a: C = 4a, S = a²',
        'HCN kích thước a, b: C = 2(a+b), S = a.b',
        'Hình thang đáy a, b, cao h: S = (a+b).h/2',
        'HBH cạnh a, cao h: S = a.h',
        'Hình thoi đường chéo d₁, d₂: S = d₁.d₂/2',
      ],
    },
  ],
  cong_thuc: ['S_vuông = a²', 'S_HCN = a.b', 'S_thang = (a+b).h/2', 'S_HBH = a.h', 'S_thoi = d₁.d₂/2'],
  vi_du: [
    {
      de_bai: 'Tính diện tích HBH có cạnh đáy 30cm, chiều cao 20cm.',
      loi_giai: 'S = 30 × 20 = 600 (cm²)',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính diện tích hình thoi có d₁ = 8cm, d₂ = 6cm.',
      dap_an: 'S = (8 × 6) / 2 = 24 (cm²)',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hình vuông chu vi 36cm, diện tích là:',
      dap_an: ['36 cm²', '81 cm²', '144 cm²', '18 cm²'],
      dap_an_dung: 1,
      giai_thich: 'a = 36/4 = 9. S = 9² = 81 cm².',
    },
  ],
  ghi_nho: [
    'Vuông: S = a². HCN: S = a.b.',
    'HBH: S = a.h. Thoi: S = d₁.d₂/2.',
    'Thang: S = (a+b).h/2.',
  ],
};

// ============================================================
// CHƯƠNG V: TÍNH ĐỐI XỨNG (§21 - §22)
// ============================================================

const BAI_21_TRUC_DOI_XUNG: LessonGuide = {
  bai_id: 'KN_G6_C5_B21',
  chuong: 5,
  so_tiet: 2,
  tieu_de: 'Bài 21: Hình có trục đối xứng',
  muc_tieu: [
    'Nhận biết hình có trục đối xứng',
    'Xác định trục đối xứng của các hình đơn giản',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Trục đối xứng',
      noi_dung: [
        'Đường thẳng d chia hình thành hai phần chồng khít khi gấp theo d.',
        'Hình tròn: vô số trục. Tam giác đều: 3. Hình vuông: 4. Lục giác đều: 6.',
        'HCN: 2 trục. Hình thoi: 2 trục.',
      ],
    },
  ],
  cong_thuc: ['Số trục: △ đều (3), Vuông (4), Lục giác đều (6), HCN (2), Thoi (2), Tròn (∞)'],
  vi_du: [
    {
      de_bai: 'Chữ cái nào có trục đối xứng: A, H, E?',
      loi_giai: 'A: 1 trục đứng. H: 2 trục. E: 1 trục ngang.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Hình thang cân có bao nhiêu trục đối xứng?',
      dap_an: '1 trục đối xứng (đường qua trung điểm 2 đáy).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hình nào có vô số trục đối xứng?',
      dap_an: ['Hình thoi', 'Hình vuông', 'Hình tròn', 'Lục giác đều'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Trục đối xứng: gấp hình theo đường thẳng, hai phần chồng khít.',
    'Hình tròn có vô số trục đối xứng.',
  ],
};

const BAI_22_TAM_DOI_XUNG: LessonGuide = {
  bai_id: 'KN_G6_C5_B22',
  chuong: 5,
  so_tiet: 2,
  tieu_de: 'Bài 22: Hình có tâm đối xứng',
  muc_tieu: [
    'Nhận biết hình có tâm đối xứng',
    'Xác định tâm đối xứng của các hình đơn giản',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tâm đối xứng',
      noi_dung: [
        'Quay hình quanh O một nửa vòng (180°), hình chồng khít chính nó ⇒ O là tâm đối xứng.',
        'Tâm đối xứng của HBH, thoi, vuông, HCN = giao điểm 2 đường chéo.',
        'Tam giác đều KHÔNG có tâm đối xứng.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tâm đối xứng của hình bình hành ABCD là gì?',
      loi_giai: 'Là giao điểm O của hai đường chéo AC và BD.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Chữ cái nào có tâm đối xứng: H, N, X, A, E?',
      dap_an: 'H, N, X có tâm đối xứng. A và E chỉ có trục đối xứng.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hình nào KHÔNG có tâm đối xứng?',
      dap_an: ['Hình tròn', 'Hình vuông', 'HBH', 'Tam giác đều'],
      dap_an_dung: 3,
    },
  ],
  ghi_nho: [
    'Quay 180° quanh tâm, hình chồng khít.',
    'Tam giác đều có trục nhưng KHÔNG có tâm đối xứng.',
  ],
};

// ============================================================
// EXPORT
// ============================================================

export const KET_NOI_TOAN_6_HK1_GUIDES: LessonGuide[] = [
  BAI_1_TAP_HOP, BAI_2_CACH_GHI_SO, BAI_3_THU_TU, BAI_4_CONG_TRU,
  BAI_5_NHAN_CHIA, BAI_6_LUY_THUA, BAI_7_THU_TU_PHEP_TINH,
  BAI_8_CHIA_HET, BAI_9_DAU_HIEU_CHIA_HET, BAI_10_SO_NGUYEN_TO,
  BAI_11_UCLN, BAI_12_BCNN,
  BAI_13_SO_NGUYEN, BAI_14_CONG_TRU_NGUYEN, BAI_15_DAU_NGOAC,
  BAI_16_NHAN_NGUYEN, BAI_17_CHIA_HET_NGUYEN,
  BAI_18_HINH_DEU, BAI_19_TU_GIAC, BAI_20_CHU_VI_DIEN_TICH,
  BAI_21_TRUC_DOI_XUNG, BAI_22_TAM_DOI_XUNG,
];

// Timeline name → Guide mapping
export const TIMELINE_TO_GUIDE_MAP_KNTT_HK1: Record<string, string> = {};
KET_NOI_TOAN_6_HK1_GUIDES.forEach(guide => {
  const shortName = guide.tieu_de.replace(/^Bài \d+:\s*/, '').substring(0, 30);
  TIMELINE_TO_GUIDE_MAP_KNTT_HK1[guide.tieu_de] = guide.bai_id;
});

export function getLessonGuideByTimelineNameKNTTHK1(tenBai: string): LessonGuide | undefined {
  for (const guide of KET_NOI_TOAN_6_HK1_GUIDES) {
    const baiNumber = guide.tieu_de.match(/Bài (\d+)/)?.[1];
    if (baiNumber && tenBai.includes(`Bài ${baiNumber}:`)) {
      return guide;
    }
  }
  return undefined;
}
