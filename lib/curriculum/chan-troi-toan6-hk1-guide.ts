// ============================================================
// HƯỚNG DẪN CHI TIẾT - TOÁN 6 HK1 - CHÂN TRỜI SÁNG TẠO
// Dữ liệu trích xuất từ Giáo án chính thức
// ============================================================

import { LessonGuide } from './canh-dieu-toan6-hk1-guide';

const BAI_1_TAP_HOP: LessonGuide = {
  bai_id: 'CT_G6_C1_B1',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 1: Tập hợp. Phần tử của tập hợp',
  muc_tieu: [
    'Làm quen với khái niệm tập hợp, phần tử của tập hợp',
    'Sử dụng các kí hiệu ∈ và ∉',
    'Biết cách cho một tập hợp bằng cách liệt kê hoặc chỉ ra tính chất đặc trưng',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Khái niệm tập hợp và phần tử',
      noi_dung: [
        'Tập hợp là khái niệm cơ bản của toán học. Các đối tượng nằm trong tập hợp được gọi là phần tử.',
        'Kí hiệu: x ∈ A đọc là x thuộc A. y ∉ A đọc là y không thuộc A.',
      ],
    },
    {
      tieu_de: '2. Cách cho một tập hợp',
      noi_dung: [
        'Cách 1: Liệt kê các phần tử của tập hợp trong dấu { }, ngăn cách bởi dấu ";". Mỗi phần tử liệt kê một lần.',
        'Cách 2: Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp.',
      ],
    },
  ],
  cong_thuc: [
    'x ∈ A: x thuộc A',
    'y ∉ A: y không thuộc A',
  ],
  vi_du: [
    {
      de_bai: 'Viết tập hợp A gồm các số tự nhiên lẻ lớn hơn 3 và nhỏ hơn 10 bằng 2 cách.',
      loi_giai: 'Cách 1: A = {5; 7; 9}\nCách 2: A = {x ∈ ℕ | x là số lẻ, 3 < x < 10}',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Cho tập hợp B = {2; 4; 6; 8}. Điền kí hiệu ∈ hoặc ∉ vào dấu ?: a) 4 ? B; b) 5 ? B.',
      dap_an: 'a) 4 ∈ B; b) 5 ∉ B.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khẳng định nào đúng về tập hợp M = {0}?',
      dap_an: ['M là tập hợp rỗng', 'M có một phần tử là 0', 'M không có phần tử nào', '0 không thuộc M'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Mỗi phần tử trong tập hợp chỉ được viết một lần.',
    'Thứ tự liệt kê các phần tử có thể thay đổi.',
  ],
};

const BAI_2_GHI_SO: LessonGuide = {
  bai_id: 'CT_G6_C1_B2',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 2: Tập hợp số tự nhiên. Ghi số tự nhiên',
  muc_tieu: [
    'Nhận biết tập hợp ℕ và ℕ*',
    'Biết cách biểu diễn số tự nhiên trên tia số',
    'Biết cách ghi số tự nhiên trong hệ thập phân và đọc viết số La Mã không quá 30',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tập hợp ℕ và ℕ*',
      noi_dung: [
        'ℕ = {0; 1; 2; 3; ...} là tập hợp số tự nhiên.',
        'ℕ* = {1; 2; 3; ...} là tập hợp số tự nhiên khác 0.',
      ],
    },
    {
      tieu_de: '2. Hệ thập phân và La Mã',
      noi_dung: [
        'Hệ thập phân dùng các chữ số từ 0 đến 9. Giá trị của chữ số phụ thuộc vào vị trí.',
        'Số La Mã sử dụng các kí hiệu I (1), V (5), X (10) ghép lại.',
      ],
    },
  ],
  cong_thuc: [
    'ab = a × 10 + b',
    'abc = a × 100 + b × 10 + c',
  ],
  vi_du: [
    {
      de_bai: 'Viết số 28 bằng số La Mã.',
      loi_giai: '28 = 20 + 8 = XX + VIII = XXVIII.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Đọc số La Mã XXIV.',
      dap_an: 'XXIV = 24 (XX = 20, IV = 4).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tập hợp ℕ* là tập hợp nào?',
      dap_an: ['{0; 1; 2; 3; ...}', '{1; 2; 3; 4; ...}', '{0; 2; 4; 6; ...}', '{1; 3; 5; 7; ...}'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Mọi số tự nhiên khác 0 đều có số liền trước.',
    'Số La Mã viết thêm bên trái là trừ, bên phải là cộng.',
  ],
};

const BAI_3_PHEP_TINH_SO_TU_NHIEN: LessonGuide = {
  bai_id: 'CT_G6_C1_B3',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 3: Các phép tính trong tập hợp số tự nhiên',
  muc_tieu: [
    'Thực hiện thành thạo phép cộng, trừ, nhân, chia số tự nhiên',
    'Áp dụng tính chất giao hoán, kết hợp, phân phối để tính nhẩm hợp lí',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép cộng và phép nhân',
      noi_dung: [
        'Giao hoán: a + b = b + a; a . b = b . a.',
        'Kết hợp: (a + b) + c = a + (b + c); (a . b) . c = a . (b . c).',
        'Phân phối: a(b + c) = ab + ac.',
      ],
    },
    {
      tieu_de: '2. Phép trừ và phép chia',
      noi_dung: [
        'a - b thực hiện được khi a ≥ b.',
        'Phép chia hết: a = b.q (b ≠ 0). Phép chia có dư: a = b.q + r (0 < r < b).',
      ],
    },
  ],
  cong_thuc: [
    'a(b + c) = ab + ac',
    'a = b.q + r (0 ≤ r < b)',
  ],
  vi_du: [
    {
      de_bai: 'Tính nhanh: 25 × 37 × 4.',
      loi_giai: '25 × 37 × 4 = (25 × 4) × 37 = 100 × 37 = 3700.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhẩm: 45 × 11.',
      dap_an: '45 × 11 = 45 × (10 + 1) = 450 + 45 = 495.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Trong phép chia có số chia là 8, số dư lớn nhất có thể là:',
      dap_an: ['8', '7', '9', '0'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Số dư luôn luôn nhỏ hơn số chia.',
    'Nhân một số với 11: viết tổng hai chữ số vào giữa hai chữ số đó (nếu tổng < 10).',
  ],
};

const BAI_4_LUY_THUA: LessonGuide = {
  bai_id: 'CT_G6_C1_B4',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 4: Lũy thừa với số mũ tự nhiên',
  muc_tieu: [
    'Hiểu khái niệm lũy thừa, cơ số, số mũ',
    'Biết cách nhân và chia hai lũy thừa cùng cơ số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Khái niệm lũy thừa',
      noi_dung: [
        'aⁿ = a.a...a (n thừa số a, n ≠ 0).',
        'a là cơ số, n là số mũ.',
      ],
    },
    {
      tieu_de: '2. Nhân, chia hai lũy thừa cùng cơ số',
      noi_dung: [
        'Nhân cùng cơ số: giữ nguyên cơ số, cộng số mũ: aᵐ . aⁿ = aᵐ⁺ⁿ.',
        'Chia cùng cơ số: giữ nguyên cơ số, trừ số mũ: aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0, m ≥ n).',
        'Quy ước: a⁰ = 1.',
      ],
    },
  ],
  cong_thuc: [
    'aᵐ . aⁿ = aᵐ⁺ⁿ',
    'aᵐ : aⁿ = aᵐ⁻ⁿ',
    'a⁰ = 1',
  ],
  vi_du: [
    {
      de_bai: 'Viết tích sau dưới dạng một lũy thừa: 3⁴ × 3⁵.',
      loi_giai: '3⁴ × 3⁵ = 3⁴⁺⁵ = 3⁹.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính giá trị của 2⁵.',
      dap_an: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Kết quả của 5⁸ : 5² dưới dạng lũy thừa là:',
      dap_an: ['5⁴', '5¹⁰', '5⁶', '5¹⁶'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Khi chia hai lũy thừa cùng cơ số, cơ số phải khác 0.',
    'Tránh nhầm lẫn aⁿ với a.n.',
  ],
};

const BAI_5_THU_TU_PHEP_TINH: LessonGuide = {
  bai_id: 'CT_G6_C1_B5',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 5: Thứ tự thực hiện các phép tính',
  muc_tieu: [
    'Nắm vững quy tắc thứ tự thực hiện các phép tính',
    'Tính đúng giá trị của các biểu thức phức tạp có ngoặc và không ngoặc',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Đối với biểu thức không có ngoặc',
      noi_dung: [
        'Nếu chỉ có cộng, trừ hoặc chỉ có nhân, chia: thực hiện từ trái sang phải.',
        'Nếu có cả cộng, trừ, nhân, chia, lũy thừa: Lũy thừa → Nhân, chia → Cộng, trừ.',
      ],
    },
    {
      tieu_de: '2. Đối với biểu thức có ngoặc',
      noi_dung: [
        'Thực hiện theo thứ tự: ngoặc tròn ( ) → ngoặc vuông [ ] → ngoặc nhọn { }.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tính giá trị biểu thức: 80 - [130 - (12 - 4)²].',
      loi_giai: '80 - [130 - (12 - 4)²] = 80 - [130 - 8²] = 80 - [130 - 64] = 80 - 66 = 14.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: 5 × 2³ - 18 : 3².',
      dap_an: '5 × 8 - 18 : 9 = 40 - 2 = 38.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Thứ tự đúng khi thực hiện phép tính trong ngoặc là:',
      dap_an: ['( ) → [ ] → { }', '{ } → [ ] → ( )', '[ ] → ( ) → { }', '( ) → { } → [ ]'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Thực hiện lũy thừa đầu tiên trong dãy không ngoặc.',
    'Nhớ hạ các số chưa tính xuống đúng vị trí để tránh sai sót.',
  ],
};

const BAI_6_CHIA_HET_TINH_CHAT: LessonGuide = {
  bai_id: 'CT_G6_C1_B6',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 6: Chia hết và chia có dư. Tính chất chia hết của một tổng',
  muc_tieu: [
    'Hiểu quan hệ chia hết, khái niệm chia có dư',
    'Nắm vững và áp dụng được tính chất chia hết của một tổng/hiệu',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Chia hết và chia có dư',
      noi_dung: [
        'Số tự nhiên a chia hết cho số tự nhiên b khác 0 nếu có số tự nhiên q sao cho a = b.q.',
        'Nếu a không chia hết cho b, ta viết a = b.q + r (0 < r < b).',
      ],
    },
    {
      tieu_de: '2. Tính chất chia hết của một tổng',
      noi_dung: [
        'Nếu tất cả các số hạng của tổng đều chia hết cho cùng một số thì tổng chia hết cho số đó: a ⋮ m và b ⋮ m ⇒ (a + b) ⋮ m.',
        'Nếu chỉ có một số hạng của tổng không chia hết cho một số, các số hạng còn lại đều chia hết cho số đó thì tổng không chia hết cho số đó.',
      ],
    },
  ],
  cong_thuc: [
    'a ⋮ m, b ⋮ m ⇒ (a + b) ⋮ m',
    'a ⋮̸ m, b ⋮ m ⇒ (a + b) ⋮̸ m',
  ],
  vi_du: [
    {
      de_bai: 'Không tính tổng, giải thích vì sao (24 + 36 + 48) chia hết cho 12.',
      loi_giai: 'Vì 24 ⋮ 12, 36 ⋮ 12, 48 ⋮ 12 nên tổng (24 + 36 + 48) ⋮ 12.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tổng (15 + 23) có chia hết cho 5 không?',
      dap_an: 'Không, vì 15 ⋮ 5 nhưng 23 không chia hết cho 5.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Nếu a ⋮ 4 và b ⋮ 4 thì tổng a + b chia hết cho:',
      dap_an: ['2', '4', 'Cả 2 và 4', '8'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Tính chất chia hết cũng áp dụng tương tự đối với hiệu (a ≥ b).',
  ],
};

const BAI_7_DAU_HIEU_2_5: LessonGuide = {
  bai_id: 'CT_G6_C1_B7',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 7: Dấu hiệu chia hết cho 2, cho 5',
  muc_tieu: [
    'Nhận biết dấu hiệu chia hết cho 2 và dấu hiệu chia hết cho 5',
    'Vận dụng giải bài tập tìm chữ số thích hợp thỏa mãn điều kiện chia hết',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Dấu hiệu chia hết cho 2',
      noi_dung: [
        'Các số có chữ số tận cùng là chữ số chẵn (0; 2; 4; 6; 8) thì chia hết cho 2 và chỉ những số đó mới chia hết cho 2.',
      ],
    },
    {
      tieu_de: '2. Dấu hiệu chia hết cho 5',
      noi_dung: [
        'Các số có chữ số tận cùng là 0 hoặc 5 thì chia hết cho 5 và chỉ những số đó mới chia hết cho 5.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm chữ số x để số 35x chia hết cho cả 2 và 5.',
      loi_giai: 'Để số 35x chia hết cho cả 2 và 5 thì chữ số tận cùng x phải bằng 0. Vậy x = 0.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Số 2025 có chia hết cho 2 không? Có chia hết cho 5 không?',
      dap_an: 'Số 2025 không chia hết cho 2 (vì tận cùng là 5, số lẻ). Số 2025 chia hết cho 5 (vì tận cùng là 5).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Số nào sau đây chia hết cho cả 2 và 5?',
      dap_an: ['105', '230', '452', '604'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Số chia hết cho cả 2 và 5 luôn có tận cùng là chữ số 0.',
  ],
};

const BAI_8_DAU_HIEU_3_9: LessonGuide = {
  bai_id: 'CT_G6_C1_B8',
  chuong: 1,
  so_tiet: 1,
  tieu_de: 'Bài 8: Dấu hiệu chia hết cho 3, cho 9',
  muc_tieu: [
    'Nhận biết dấu hiệu chia hết cho 3 và dấu hiệu chia hết cho 9',
    'Biết cách phân biệt dấu hiệu chia hết dựa trên tổng các chữ số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Dấu hiệu chia hết cho 9',
      noi_dung: [
        'Các số có tổng các chữ số chia hết cho 9 thì chia hết cho 9 và chỉ những số đó mới chia hết cho 9.',
      ],
    },
    {
      tieu_de: '2. Dấu hiệu chia hết cho 3',
      noi_dung: [
        'Các số có tổng các chữ số chia hết cho 3 thì chia hết cho 3 và chỉ những số đó mới chia hết cho 3.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Số 2022 có chia hết cho 3 không? Có chia hết cho 9 không?',
      loi_giai: 'Tổng các chữ số: 2 + 0 + 2 + 2 = 6.\nVì 6 ⋮ 3 nên 2022 chia hết cho 3.\nVì 6 không chia hết cho 9 nên 2022 không chia hết cho 9.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm chữ số * để số 1*8 chia hết cho 9.',
      dap_an: 'Tổng các chữ số: 1 + * + 8 = 9 + *.\nĐể chia hết cho 9, * ∈ {0; 9}.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khẳng định nào sau đây là sai?',
      dap_an: [
        'Một số chia hết cho 9 thì chắc chắn chia hết cho 3',
        'Một số chia hết cho 3 thì chắc chắn chia hết cho 9',
        'Số 111 chia hết cho 3',
        'Số 999 chia hết cho cả 3 và 9',
      ],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Chia hết cho 3 và 9 phụ thuộc vào TỔNG CÁC CHỮ SỐ, khác với chia hết cho 2 và 5 phụ thuộc vào CHỮ SỐ TẬN CÙNG.',
  ],
};

const BAI_9_UOC_VA_BOI: LessonGuide = {
  bai_id: 'CT_G6_C1_B9',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 9: Ước và bội',
  muc_tieu: [
    'Hiểu định nghĩa ước và bội của một số tự nhiên',
    'Biết cách tìm tập hợp các ước và tập hợp các bội của một số cho trước',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Khái niệm ước và bội',
      noi_dung: [
        'Nếu số tự nhiên a chia hết cho số tự nhiên b thì ta nói a là bội của b và b là ước của a.',
        'Kí hiệu tập hợp các ước của a là Ư(a); tập hợp các bội của b là B(b).',
      ],
    },
    {
      tieu_de: '2. Cách tìm ước và bội',
      noi_dung: [
        'Muốn tìm ước của a (a > 1), ta lần lượt chia a cho các số tự nhiên từ 1 đến a xem a chia hết cho những số nào.',
        'Muốn tìm bội của b (b ≠ 0), ta nhân b lần lượt với 0, 1, 2, 3, ...',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm tập hợp Ư(8) và tìm 5 bội của 3.',
      loi_giai: 'Ư(8) = {1; 2; 4; 8}.\n5 bội của 3 là: {0; 3; 6; 9; 12}.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm các số tự nhiên x sao cho x ∈ B(5) và x < 20.',
      dap_an: 'B(5) = {0; 5; 10; 15; 20; ...}.\nVì x < 20 nên x ∈ {0; 5; 10; 15}.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tập hợp nào sau đây là tập hợp tất cả các ước của 10?',
      dap_an: ['{1; 2; 5}', '{2; 5; 10}', '{1; 2; 5; 10}', '{0; 1; 2; 5; 10}'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Số 0 là bội của mọi số tự nhiên khác 0.',
    'Số 1 là ước của mọi số tự nhiên.',
  ],
};

const BAI_10_SO_NGUYEN_TO: LessonGuide = {
  bai_id: 'CT_G6_C1_B10',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 10: Số nguyên tố. Hợp số. Phân tích một số ra thừa số nguyên tố',
  muc_tieu: [
    'Hiểu định nghĩa số nguyên tố và hợp số',
    'Biết cách phân tích một số tự nhiên lớn hơn 1 ra thừa số nguyên tố bằng sơ đồ cây hoặc sơ đồ cột',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Số nguyên tố và Hợp số',
      noi_dung: [
        'Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.',
        'Hợp số là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.',
        'Số 0 và số 1 không phải là số nguyên tố và cũng không phải là hợp số.',
      ],
    },
    {
      tieu_de: '2. Phân tích ra thừa số nguyên tố',
      noi_dung: [
        'Phân tích một số tự nhiên lớn hơn 1 ra thừa số nguyên tố là viết số đó dưới dạng một tích các thừa số nguyên tố.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Phân tích số 18 ra thừa số nguyên tố.',
      loi_giai: '18 = 2 × 9 = 2 × 3 × 3 = 2 × 3².',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Trong các số sau, số nào là số nguyên tố: 2, 9, 13, 15, 23?',
      dap_an: 'Các số nguyên tố là: 2, 13, 23. (9 và 15 là hợp số).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Số nguyên tố nhỏ nhất là số nào?',
      dap_an: ['0', '1', '2', '3'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Số 2 là số nguyên tố chẵn duy nhất.',
    'Khi phân tích ra thừa số nguyên tố, ta thường viết các ước nguyên tố theo thứ tự tăng dần.',
  ],
};

const BAI_11_UCLN: LessonGuide = {
  bai_id: 'CT_G6_C1_B11',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 12: Ước chung, ước chung lớn nhất',
  muc_tieu: [
    'Hiểu khái niệm ước chung (ƯC) và ước chung lớn nhất (ƯCLN)',
    'Tìm được ƯCLN bằng cách phân tích các số ra thừa số nguyên tố',
    'Nhận biết hai số nguyên tố cùng nhau',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Ước chung và ƯCLN',
      noi_dung: [
        'Ước chung của hai hay nhiều số là ước của tất cả các số đó.',
        'Ước chung lớn nhất (ƯCLN) của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của các số đó.',
      ],
    },
    {
      tieu_de: '2. Quy tắc tìm ƯCLN',
      noi_dung: [
        'Bước 1: Phân tích mỗi số ra thừa số nguyên tố.',
        'Bước 2: Chọn ra các thừa số nguyên tố chung.',
        'Bước 3: Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ nhỏ nhất của nó. Tích đó là ƯCLN cần tìm.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm ƯCLN(12, 18).',
      loi_giai: '12 = 2² × 3; 18 = 2 × 3².\nThừa số nguyên tố chung là 2 và 3.\nSố mũ nhỏ nhất của 2 là 1, của 3 là 1.\nƯCLN(12, 18) = 2¹ × 3¹ = 6.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Hai số 8 và 9 có nguyên tố cùng nhau không? Vì sao?',
      dap_an: 'Có, vì ƯCLN(8, 9) = 1.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'ƯCLN(15, 30) bằng bao nhiêu?',
      dap_an: ['5', '15', '30', '1'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Nếu số nhỏ nhất là ước của các số còn lại thì ƯCLN chính là số nhỏ nhất đó (Ví dụ: ƯCLN(15, 30) = 15).',
  ],
};

const BAI_12_BCNN: LessonGuide = {
  bai_id: 'CT_G6_C1_B12',
  chuong: 1,
  so_tiet: 2,
  tieu_de: 'Bài 13: Bội chung, bội chung nhỏ nhất',
  muc_tieu: [
    'Hiểu khái niệm bội chung (BC) và bội chung nhỏ nhất (BCNN)',
    'Biết cách tìm BCNN bằng cách phân tích các số ra thừa số nguyên tố',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Bội chung và BCNN',
      noi_dung: [
        'Bội chung của hai hay nhiều số là bội của tất cả các số đó.',
        'Bội chung nhỏ nhất (BCNN) của hai hay nhiều số là số nhỏ nhất khác 0 trong tập hợp các bội chung của các số đó.',
      ],
    },
    {
      tieu_de: '2. Quy tắc tìm BCNN',
      noi_dung: [
        'Bước 1: Phân tích mỗi số ra thừa số nguyên tố.',
        'Bước 2: Chọn ra các thừa số nguyên tố chung và riêng.',
        'Bước 3: Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ lớn nhất của nó. Tích đó là BCNN cần tìm.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm BCNN(6, 8).',
      loi_giai: '6 = 2 × 3; 8 = 2³.\nThừa số chung và riêng là 2 và 3.\nSố mũ lớn nhất của 2 là 3, của 3 là 1.\nBCNN(6, 8) = 2³ × 3¹ = 24.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm BCNN(10, 30).',
      dap_an: 'Vì 30 là bội của 10 nên BCNN(10, 30) = 30.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Để tìm BCNN, ta lấy các thừa số nguyên tố chung và riêng với số mũ:',
      dap_an: ['Nhỏ nhất', 'Lớn nhất', 'Bằng nhau', 'Bất kì'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Bội chung của các số đều là bội của BCNN của chúng.',
  ],
};

const BAI_13_SO_NGUYEN_AM: LessonGuide = {
  bai_id: 'CT_G6_C1_B13',
  chuong: 2,
  so_tiet: 3,
  tieu_de: 'Bài 1: Số nguyên âm và tập hợp các số nguyên',
  muc_tieu: [
    'Nhận biết số nguyên âm trong thực tiễn (nhiệt độ âm, độ cao âm)',
    'Biết tập hợp số nguyên ℤ gồm số nguyên âm, số 0 và số nguyên dương',
    'Biểu diễn được các số nguyên trên trục số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Khái niệm số nguyên âm',
      noi_dung: [
        'Số nguyên âm được viết dưới dạng -1, -2, -3, ... (đọc là âm một, âm hai...) để chỉ các giá trị nhỏ hơn 0.',
      ],
    },
    {
      tieu_de: '2. Tập hợp số nguyên ℤ',
      noi_dung: [
        'ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}.',
        'Số 0 không phải số nguyên âm cũng không phải số nguyên dương.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Độ cao của đỉnh núi Fansipan là 3 143 m trên mực nước biển. Độ sâu của rãnh Mariana là 10 994 m dưới mực nước biển. Hãy dùng số nguyên biểu diễn các độ cao đó.',
      loi_giai: 'Đỉnh núi Fansipan: +3 143 m (hoặc 3 143 m).\nRãnh Mariana: -10 994 m.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Vẽ một trục số nằm ngang và biểu diễn các điểm -2, 0, 2.',
      dap_an: 'Vẽ đường thẳng có mũi tên bên phải, điểm 0 ở giữa, điểm -2 cách 0 hai đơn vị về bên trái, điểm 2 cách 0 hai đơn vị về bên phải.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tập hợp các số nguyên kí hiệu là:',
      dap_an: ['ℕ', 'ℤ', 'ℕ*', 'ℚ'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Điểm biểu diễn số nguyên âm nằm bên trái điểm 0 trên trục số nằm ngang.',
  ],
};

const BAI_14_THU_TU_SO_NGUYEN: LessonGuide = {
  bai_id: 'CT_G6_C1_B14',
  chuong: 2,
  so_tiet: 2,
  tieu_de: 'Bài 2: Thứ tự trong tập hợp số nguyên',
  muc_tieu: [
    'So sánh được hai số nguyên bất kì',
    'Nhận biết được số đối của một số nguyên',
  ],
  kien_thuc: [
    {
      tieu_de: '1. So sánh hai số nguyên',
      noi_dung: [
        'Trên trục số nằm ngang, nếu điểm a nằm bên trái điểm b thì a < b.',
        'Mọi số nguyên dương đều lớn hơn 0 và lớn hơn mọi số nguyên âm.',
        'Mọi số nguyên âm đều nhỏ hơn 0.',
      ],
    },
    {
      tieu_de: '2. Số đối',
      noi_dung: [
        'Hai số nguyên trên trục số nằm ở hai phía của điểm 0 và cách đều điểm 0 gọi là hai số đối nhau.',
        'Số đối của a kí hiệu là -a.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'So sánh: -5 và -3.',
      loi_giai: 'Trên trục số, điểm -5 nằm bên trái điểm -3 nên -5 < -3.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm số đối của các số: 4, -7, 0.',
      dap_an: 'Số đối của 4 là -4; số đối của -7 là 7; số đối của 0 là 0.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khẳng định nào sau đây đúng?',
      dap_an: ['-8 > -5', '-10 < -15', '-3 < 0', '0 < -2'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Trong hai số nguyên âm, số nào có số đối lớn hơn thì nhỏ hơn.',
  ],
};

const BAI_15_CONG_TRU_SO_NGUYEN: LessonGuide = {
  bai_id: 'CT_G6_C1_B15',
  chuong: 2,
  so_tiet: 6,
  tieu_de: 'Bài 3: Phép cộng và phép trừ hai số nguyên',
  muc_tieu: [
    'Thực hiện thành thạo phép cộng và phép trừ hai số nguyên',
    'Áp dụng quy tắc dấu ngoặc để tính toán hợp lí',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép cộng hai số nguyên',
      noi_dung: [
        'Cộng hai số nguyên cùng dấu: cộng hai phần số tự nhiên rồi đặt dấu chung trước kết quả.',
        'Cộng hai số nguyên khác dấu: lấy số có phần tự nhiên lớn hơn trừ đi số có phần tự nhiên nhỏ hơn, rồi đặt dấu của số có phần tự nhiên lớn hơn trước kết quả.',
      ],
    },
    {
      tieu_de: '2. Phép trừ hai số nguyên',
      noi_dung: [
        'Muốn trừ số nguyên a cho số nguyên b, ta cộng a với số đối của b: a - b = a + (-b).',
      ],
    },
    {
      tieu_de: '3. Quy tắc dấu ngoặc',
      noi_dung: [
        'Khi bỏ dấu ngoặc có dấu "+" đằng trước, ta giữ nguyên dấu của các số hạng trong ngoặc.',
        'Khi bỏ dấu ngoặc có dấu "-" đằng trước, ta phải đổi dấu tất cả các số hạng trong ngoặc: dấu "+" thành "-", dấu "-" thành "+".',
      ],
    },
  ],
  cong_thuc: [
    'a - b = a + (-b)',
    '-(a - b + c) = -a + b - c',
  ],
  vi_du: [
    {
      de_bai: 'Tính: a) (-15) + (-20); b) 10 - (-5).',
      loi_giai: 'a) (-15) + (-20) = -(15 + 20) = -35.\nb) 10 - (-5) = 10 + 5 = 15.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhanh: (125 - 45) - (125 - 5).',
      dap_an: 'Bỏ ngoặc: 125 - 45 - 125 + 5 = (125 - 125) + (5 - 45) = 0 - 40 = -40.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Kết quả của phép tính (-8) - (-10) là:',
      dap_an: ['-18', '2', '-2', '18'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Cộng hai số đối nhau luôn bằng 0.',
    'Cẩn thận đổi dấu tất cả các số khi bỏ ngoặc có dấu trừ phía trước.',
  ],
};

const BAI_16_NHAN_CHIA_SO_NGUYEN: LessonGuide = {
  bai_id: 'CT_G6_C1_B16',
  chuong: 2,
  so_tiet: 6,
  tieu_de: 'Bài 4: Phép nhân và phép chia hai số nguyên',
  muc_tieu: [
    'Thực hiện thành thạo phép nhân và phép chia hết hai số nguyên',
    'Nhớ và vận dụng đúng quy tắc dấu của tích và thương',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Quy tắc dấu của phép nhân và phép chia',
      noi_dung: [
        'Cùng dấu: tích/thương mang dấu dương (+).',
        'Khác dấu: tích/thương mang dấu âm (-).',
      ],
    },
    {
      tieu_de: '2. Tính chất của phép nhân',
      noi_dung: [
        'Giao hoán, kết hợp, nhân với 1, tính chất phân phối đối với phép cộng.',
      ],
    },
  ],
  cong_thuc: [
    '(+) . (+) = (+);  (-) . (-) = (+)',
    '(+) . (-) = (-);  (-) . (+) = (-)',
  ],
  vi_du: [
    {
      de_bai: 'Tính: a) (-4) × (-25); b) 36 : (-9).',
      loi_giai: 'a) Hai số cùng dấu âm nên kết quả dương: (-4) × (-25) = 100.\nb) Hai số khác dấu nên kết quả âm: 36 : (-9) = -4.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhanh: (-5) × 12 × (-2).',
      dap_an: '(-5) × 12 × (-2) = [(-5) × (-2)] × 12 = 10 × 12 = 120.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tích của 3 số nguyên âm và 1 số nguyên dương là số:',
      dap_an: ['Dương', 'Âm', 'Bằng 0', 'Không xác định được'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Tích một số lẻ thừa số nguyên âm sẽ mang dấu âm.',
    'Tích một số chẵn thừa số nguyên âm sẽ mang dấu dương.',
  ],
};

const BAI_17_HINH_DEU: LessonGuide = {
  bai_id: 'CT_G6_C1_B17',
  chuong: 3,
  so_tiet: 3,
  tieu_de: 'Bài 1: Hình vuông - Tam giác đều - Lục giác đều',
  muc_tieu: [
    'Nhận biết các hình: tam giác đều, hình vuông, lục giác đều trong thực tế',
    'Mô tả các đặc điểm hình học của ba hình này (cạnh, góc, đường chéo)',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tam giác đều',
      noi_dung: [
        'Có 3 cạnh bằng nhau, 3 góc bằng nhau và bằng 60°.',
      ],
    },
    {
      tieu_de: '2. Hình vuông',
      noi_dung: [
        'Có 4 cạnh bằng nhau, 4 góc vuông (90°), 2 đường chéo bằng nhau.',
      ],
    },
    {
      tieu_de: '3. Lục giác đều',
      noi_dung: [
        'Có 6 cạnh bằng nhau, 6 góc bằng nhau và bằng 120°, 3 đường chéo chính bằng nhau.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Nêu các đặc điểm của lục giác đều ABCDEG.',
      loi_giai: 'Các cạnh bằng nhau: AB=BC=CD=DE=EG=GA. Các góc ở đỉnh bằng nhau. Có 3 đường chéo chính AD, BE, CG bằng nhau.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Vẽ một tam giác đều cạnh 3cm.',
      dap_an: 'Vẽ đoạn thẳng AB = 3cm. Dùng compa vẽ hai cung tròn bán kính 3cm tâm A và B cắt nhau tại C. Nối AC và BC ta được tam giác đều ABC.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Mỗi góc của tam giác đều bằng bao nhiêu độ?',
      dap_an: ['45°', '60°', '90°', '120°'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Lục giác đều có thể ghép lại từ 6 tam giác đều chung đỉnh O.',
  ],
};

const BAI_18_TU_GIAC: LessonGuide = {
  bai_id: 'CT_G6_C1_B18',
  chuong: 3,
  so_tiet: 4,
  tieu_de: 'Bài 2: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân',
  muc_tieu: [
    'Nhận biết hình chữ nhật, hình thoi, hình bình hành, hình thang cân',
    'Mô tả các tính chất hình học cơ bản của chúng',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Hình chữ nhật và hình bình hành',
      noi_dung: [
        'Hình chữ nhật: 4 góc vuông, các cạnh đối song song và bằng nhau, hai đường chéo bằng nhau.',
        'Hình bình hành: các cạnh đối song song và bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm của mỗi đường.',
      ],
    },
    {
      tieu_de: '2. Hình thoi và hình thang cân',
      noi_dung: [
        'Hình thoi: 4 cạnh bằng nhau, các cạnh đối song song, hai đường chéo vuông góc với nhau.',
        'Hình thang cân: hai đáy song song, hai cạnh bên bằng nhau, hai đường chéo bằng nhau.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Nêu sự khác biệt về hai đường chéo giữa hình chữ nhật và hình thoi.',
      loi_giai: 'Đường chéo hình chữ nhật bằng nhau. Đường chéo hình thoi vuông góc với nhau tại trung điểm của mỗi đường.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm hình thang cân trong các đồ vật thực tế.',
      dap_an: 'Thân thang tre, một số loại hộp quà, hoặc mặt bàn hình thang cân.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hình thoi có tính chất nào sau đây?',
      dap_an: ['Bốn góc bằng 90°', 'Hai đường chéo vuông góc với nhau', 'Hai đường chéo bằng nhau', 'Bốn góc bằng nhau'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Hình thoi là hình bình hành có hai đường chéo vuông góc.',
  ],
};

const BAI_19_CHU_VI_DIEN_TICH: LessonGuide = {
  bai_id: 'CT_G6_C1_B19',
  chuong: 3,
  so_tiet: 3,
  tieu_de: 'Bài 3: Chu vi và diện tích của một số hình trong thực tiễn',
  muc_tieu: [
    'Nhớ và áp dụng thành thạo các công thức tính chu vi, diện tích hình vuông, hình chữ nhật, hình bình hành, hình thoi, hình thang',
  ],
  kien_thuc: [
    {
      tieu_de: 'Các công thức tính chu vi và diện tích',
      noi_dung: [
        'Hình bình hành (cạnh a, b, chiều cao h ứng với a): C = 2(a + b); S = a . h.',
        'Hình thoi (cạnh a, đường chéo m, n): C = 4a; S = (m . n) / 2.',
        'Hình thang (đáy a, b, chiều cao h, cạnh bên c, d): C = a + b + c + d; S = (a + b) . h / 2.',
      ],
    },
  ],
  cong_thuc: [
    'S_bình_hành = a . h',
    'S_thoi = (m . n) / 2',
    'S_thang = (a + b) . h / 2',
  ],
  vi_du: [
    {
      de_bai: 'Tính diện tích hình thoi có độ dài hai đường chéo lần lượt là 6cm và 8cm.',
      loi_giai: 'S = (6 × 8) / 2 = 24 cm².',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Một mảnh vườn hình thang cân có đáy lớn 10m, đáy bé 6m, chiều cao 5m. Tính diện tích vườn.',
      dap_an: 'S = (10 + 6) × 5 / 2 = 40 m².',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Diện tích hình bình hành có đáy 10cm, chiều cao tương ứng 6cm là:',
      dap_an: ['30 cm²', '60 cm²', '16 cm²', '80 cm²'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Khi tính toán chu vi và diện tích, tất cả các số đo phải đưa về cùng một đơn vị đo.',
  ],
};

const BAI_20_THU_THAP_PHAN_LOAI_DU_LIEU: LessonGuide = {
  bai_id: 'CT_G6_C1_B20',
  chuong: 4,
  so_tiet: 2,
  tieu_de: 'Bài 1: Thu thập và phân loại dữ liệu',
  muc_tieu: [
    'Biết cách thu thập dữ liệu bằng bảng hỏi hoặc quan sát',
    'Biết phân loại dữ liệu theo các tiêu chí cho trước',
    'Đánh giá được tính hợp lí của dữ liệu số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Dữ liệu là gì?',
      noi_dung: [
        'Dữ liệu là các thông tin thu thập được như số, chữ, hình ảnh... Dữ liệu bằng số gọi là số liệu.',
      ],
    },
    {
      tieu_de: '2. Phân loại dữ liệu',
      noi_dung: [
        'Dữ liệu có thể chia làm hai loại chính: dữ liệu số (số liệu) và dữ liệu không phải là số (chữ, hình ảnh...).',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho danh sách: "Hà Nội, 15, Hải Phòng, 25, Đà Nẵng". Hãy chỉ ra đâu là số liệu.',
      loi_giai: 'Số liệu là các số: 15, 25.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Dữ liệu về điểm thi môn Toán: 8, 9, 15, 7. Số liệu nào không hợp lí?',
      dap_an: 'Số 15 không hợp lí vì thang điểm thi tối đa là 10.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Dữ liệu nào sau đây không phải là số liệu?',
      dap_an: ['Chiều cao học sinh', 'Nhiệt độ phòng', 'Màu sắc yêu thích', 'Số lượng xe máy'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Kiểm tra tính hợp lý của dữ liệu là bước quan trọng sau khi thu thập.',
  ],
};

const BAI_21_BIEU_DIEN_DU_LIEU_TREN_BANG: LessonGuide = {
  bai_id: 'CT_G6_C1_B21',
  chuong: 4,
  so_tiet: 3,
  tieu_de: 'Bài 2: Biểu diễn dữ liệu trên bảng',
  muc_tieu: [
    'Biết cách lập bảng viết tắt hoặc bảng kiểm đếm dữ liệu',
    'Lập được bảng thống kê từ dữ liệu cho trước và đọc hiểu bảng thống kê đó',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Lập bảng thống kê',
      noi_dung: [
        'Bảng thống kê giúp trình bày dữ liệu một cách khoa học, rõ ràng và dễ so sánh.',
        'Gồm các cột tiêu chí đối tượng và các dòng tương ứng.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Lập bảng thống kê xếp loại học lực tổ 1 có: 3 bạn Giỏi, 5 bạn Khá, 2 bạn Trung bình.',
      loi_giai: 'Bảng thống kê:\n- Xếp loại: Giỏi | Khá | Trung bình\n- Số học sinh: 3 | 5 | 2.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Từ bảng trên, tổng số học sinh của tổ 1 là bao nhiêu?',
      dap_an: 'Tổng số học sinh: 3 + 5 + 2 = 10 học sinh.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Bảng thống kê dùng để làm gì?',
      dap_an: ['Vẽ hình học', 'Trình bày số liệu một cách khoa học, dễ so sánh', 'Tính toán tích phân', 'Trang trí ứng dụng'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Kiểm đếm dữ liệu bằng các vạch chia nhỏ giúp hạn chế bỏ sót.',
  ],
};

const BAI_22_BIEU_DO_TRANH: LessonGuide = {
  bai_id: 'CT_G6_C1_B22',
  chuong: 4,
  so_tiet: 2,
  tieu_de: 'Bài 3: Biểu đồ tranh',
  muc_tieu: [
    'Đọc và phân tích thông tin từ biểu đồ tranh',
    'Biết cách tự vẽ biểu đồ tranh đơn giản',
  ],
  kien_thuc: [
    {
      tieu_de: 'Biểu đồ tranh',
      noi_dung: [
        'Biểu đồ tranh dùng các hình ảnh hoặc biểu tượng để biểu diễn dữ liệu.',
        'Mỗi hình ảnh/biểu tượng đại diện cho một số lượng đối tượng nhất định.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Nếu một biểu tượng 🌟 đại diện cho 10 điểm tốt. Tổ 1 đạt được 4 biểu tượng 🌟. Hỏi tổ 1 có bao nhiêu điểm tốt?',
      loi_giai: 'Số điểm tốt của tổ 1 là: 4 × 10 = 40 điểm.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Nếu biểu tượng 🌟 đại diện cho 10 điểm tốt, nửa biểu tượng đại diện cho 5 điểm tốt. Vẽ hình biểu diễn 25 điểm tốt.',
      dap_an: 'Vẽ 2 biểu tượng 🌟 và 1 nửa biểu tượng 🌟.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khi đọc biểu đồ tranh, bộ phận nào quan trọng nhất giúp hiểu giá trị của biểu tượng?',
      dap_an: ['Tiêu đề biểu đồ', 'Trục ngang', 'Chú giải (chú thích)', 'Màu nền'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Luôn chú ý phần ghi chú ở cuối biểu đồ tranh.',
  ],
};

const BAI_23_BIEU_DO_COT_KEP: LessonGuide = {
  bai_id: 'CT_G6_C1_B23',
  chuong: 4,
  so_tiet: 4,
  tieu_de: 'Bài 4: Biểu đồ cột – Biểu đồ cột kép',
  muc_tieu: [
    'Đọc hiểu và lấy được thông tin từ biểu đồ cột và biểu đồ cột kép',
    'Nhận ra xu thế phát triển của các đối tượng qua biểu đồ',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Biểu đồ cột',
      noi_dung: [
        'Gồm các cột hình chữ nhật có độ rộng như nhau, chiều cao tương ứng với số liệu của đối tượng.',
      ],
    },
    {
      tieu_de: '2. Biểu đồ cột kép',
      noi_dung: [
        'Dùng để so sánh hai bộ dữ liệu cùng loại của các đối tượng. Các cột biểu diễn cạnh nhau để dễ đối chiếu.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Biểu đồ cột biểu diễn số xe máy bán được: Tháng 1 (10 xe), Tháng 2 (15 xe). Hỏi tháng nào bán nhiều hơn và nhiều hơn bao nhiêu?',
      loi_giai: 'Tháng 2 bán nhiều hơn tháng 1. Nhiều hơn: 15 - 10 = 5 xe.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Nêu sự khác biệt chính giữa biểu đồ cột đơn và biểu đồ cột kép.',
      dap_an: 'Biểu đồ cột kép vẽ các cặp cột liền kề nhau để so sánh trực quan hai nhóm số liệu của cùng một đối tượng.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Biểu đồ cột kép phù hợp nhất cho mục đích nào?',
      dap_an: [
        'Biểu diễn sự thay đổi liên tục',
        'So sánh hai nhóm dữ liệu cùng loại tại từng mốc/đối tượng',
        'Tìm tỉ lệ phần trăm của một tổng thể',
        'Tìm số dư phép chia',
      ],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Độ rộng của các cột trong biểu đồ cột phải bằng nhau.',
  ],
};

export const CHAN_TROI_TOAN_6_HK1_GUIDES: LessonGuide[] = [
  BAI_1_TAP_HOP, BAI_2_GHI_SO, BAI_3_PHEP_TINH_SO_TU_NHIEN, BAI_4_LUY_THUA,
  BAI_5_THU_TU_PHEP_TINH, BAI_6_CHIA_HET_TINH_CHAT, BAI_7_DAU_HIEU_2_5,
  BAI_8_DAU_HIEU_3_9, BAI_9_UOC_VA_BOI, BAI_10_SO_NGUYEN_TO,
  BAI_11_UCLN, BAI_12_BCNN, BAI_13_SO_NGUYEN_AM, BAI_14_THU_TU_SO_NGUYEN,
  BAI_15_CONG_TRU_SO_NGUYEN, BAI_16_NHAN_CHIA_SO_NGUYEN, BAI_17_HINH_DEU,
  BAI_18_TU_GIAC, BAI_19_CHU_VI_DIEN_TICH, BAI_20_THU_THAP_PHAN_LOAI_DU_LIEU,
  BAI_21_BIEU_DIEN_DU_LIEU_TREN_BANG, BAI_22_BIEU_DO_TRANH, BAI_23_BIEU_DO_COT_KEP,
];

export function getLessonGuideByTimelineNameCTSTHK1(tenBai: string): LessonGuide | undefined {
  for (const guide of CHAN_TROI_TOAN_6_HK1_GUIDES) {
    const baiNumber = guide.tieu_de.match(/Bài (\d+)/)?.[1];
    if (baiNumber && tenBai.includes(`Bài ${baiNumber}:`)) {
      return guide;
    }
  }
  return undefined;
}
