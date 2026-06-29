// ============================================================
// HƯỚNG DẪN CHI TIẾT - TOÁN 6 HK2 - CHÂN TRỜI SÁNG TẠO
// Dữ liệu trích xuất từ Giáo án chính thức
// ============================================================

import { LessonGuide } from './canh-dieu-toan6-hk1-guide';

const BAI_1_PHAN_SO_SO_NGUYEN: LessonGuide = {
  bai_id: 'CT_G6_C2_B1',
  chuong: 5,
  so_tiet: 2,
  tieu_de: 'Bài 1: Phân số với tử số và mẫu số là số nguyên',
  muc_tieu: [
    'Mở rộng khái niệm phân số cho số nguyên',
    'Nhận biết tử số và mẫu số là số nguyên (mẫu số khác 0)',
    'Biết cách biểu diễn thương của phép chia hai số nguyên dưới dạng phân số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Khái niệm phân số',
      noi_dung: [
        'Người ta gọi a/b với a, b ∈ ℤ, b ≠ 0 là một phân số, trong đó a là tử số (tử) và b là mẫu số (mẫu).',
      ],
    },
  ],
  cong_thuc: [
    'a/b (a, b ∈ ℤ, b ≠ 0)',
  ],
  vi_du: [
    {
      de_bai: 'Hãy viết các phân số có tử là -3 và mẫu là 5.',
      loi_giai: 'Phân số cần viết là: -3/5.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết kết quả phép chia -4 cho 7 dưới dạng phân số.',
      dap_an: '-4/7.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Biểu thức nào sau đây không phải là phân số?',
      dap_an: ['-3/4', '0/-5', '1.5/2', '7/1'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Mọi số nguyên n đều có thể viết dưới dạng phân số n/1.',
  ],
};

const BAI_2_TINH_CHAT_CO_BAN: LessonGuide = {
  bai_id: 'CT_G6_C2_B2',
  chuong: 5,
  so_tiet: 2,
  tieu_de: 'Bài 2: Tính chất cơ bản của phân số',
  muc_tieu: [
    'Nắm vững tính chất cơ bản của phân số',
    'Áp dụng tính chất để viết một phân số có mẫu âm thành mẫu dương, rút gọn phân số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tính chất cơ bản',
      noi_dung: [
        'Nếu nhân cả tử và mẫu của một phân số với cùng một số nguyên khác 0 thì ta được một phân số bằng phân số đã cho: a/b = (a.m)/(b.m) (m ∈ ℤ, m ≠ 0).',
        'Nếu chia cả tử và mẫu của một phân số cho cùng một ước chung của chúng thì ta được một phân số bằng phân số đã cho: a/b = (a:n)/(b:n) (n ∈ ƯC(a, b)).',
      ],
    },
    {
      tieu_de: '2. Quy tắc đổi mẫu âm thành mẫu dương',
      noi_dung: [
        'Nhân cả tử và mẫu của phân số với -1: a/-b = -a/b.',
      ],
    },
  ],
  cong_thuc: [
    'a/b = (a.m)/(b.m) (m ≠ 0)',
    'a/b = (a:n)/(b:n) (n ∈ ƯC)',
  ],
  vi_du: [
    {
      de_bai: 'Rút gọn phân số -12/18 về dạng tối giản.',
      loi_giai: 'ƯCLN(12, 18) = 6. Chia cả tử và mẫu cho 6: -12 : 6 / (18 : 6) = -2/3.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết phân số 3/-5 thành phân số mẫu dương.',
      dap_an: '-3/5.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Phân số tối giản của -15/20 là:',
      dap_an: ['-3/4', '3/4', '-5/4', '-3/5'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Phân số tối giản là phân số mà tử và mẫu chỉ có ước chung là 1 và -1.',
  ],
};

const BAI_3_SO_SANH_PHAN_SO: LessonGuide = {
  bai_id: 'CT_G6_C2_B3',
  chuong: 5,
  so_tiet: 2,
  tieu_de: 'Bài 3: So sánh phân số',
  muc_tieu: [
    'Biết cách so sánh hai phân số cùng mẫu và khác mẫu',
    'Biết tìm mẫu số chung bằng cách dùng BCNN',
  ],
  kien_thuc: [
    {
      tieu_de: '1. So sánh phân số cùng mẫu',
      noi_dung: [
        'Trong hai phân số có cùng một mẫu dương, phân số nào có tử lớn hơn thì lớn hơn.',
      ],
    },
    {
      tieu_de: '2. So sánh phân số khác mẫu',
      noi_dung: [
        'Quy đồng mẫu dương của hai phân số, rồi so sánh các tử số của chúng.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'So sánh -3/4 và -5/6.',
      loi_giai: 'BCNN(4, 6) = 12.\n-3/4 = -9/12; -5/6 = -10/12.\nVì -9 > -10 nên -9/12 > -10/12. Vậy -3/4 > -5/6.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Sắp xếp theo thứ tự tăng dần: -1/2, 0, 1/3.',
      dap_an: '-1/2 < 0 < 1/3.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khẳng định nào đúng?',
      dap_an: ['-3/5 > 0', '-4/7 < -5/7', '2/3 < 3/4', '-1/2 > 1/2'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Phân số có tử và mẫu cùng dấu là phân số dương (lớn hơn 0).',
    'Phân số có tử và mẫu khác dấu là phân số âm (nhỏ hơn 0).',
  ],
};

const BAI_4_CONG_TRU_PHAN_SO: LessonGuide = {
  bai_id: 'CT_G6_C2_B4',
  chuong: 5,
  so_tiet: 2,
  tieu_de: 'Bài 4: Phép cộng và phép trừ phân số',
  muc_tieu: [
    'Thực hiện thành thạo phép cộng và phép trừ hai phân số',
    'Áp dụng các tính chất giao hoán, kết hợp để tính hợp lí',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép cộng phân số',
      noi_dung: [
        'Cộng cùng mẫu: a/m + b/m = (a + b)/m.',
        'Cộng khác mẫu: quy đồng mẫu số rồi thực hiện cộng cùng mẫu.',
      ],
    },
    {
      tieu_de: '2. Phép trừ phân số',
      noi_dung: [
        'Lấy số bị trừ cộng với số đối của số trừ: a/b - c/d = a/b + (-c/d).',
      ],
    },
  ],
  cong_thuc: [
    'a/m + b/m = (a + b)/m',
    'a/b - c/d = a/b + (-c/d)',
  ],
  vi_du: [
    {
      de_bai: 'Tính: 1/2 - 3/4.',
      loi_giai: '1/2 - 3/4 = 2/4 - 3/4 = -1/4.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhanh: -3/7 + 5/9 + -4/7.',
      dap_an: '(-3/7 + -4/7) + 5/9 = -1 + 5/9 = -4/9.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Kết quả của -1/3 + 2/3 là:',
      dap_an: ['1/3', '-1/3', '3/3', '0'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Số đối của phân số a/b là -a/b, thỏa mãn: a/b + (-a/b) = 0.',
  ],
};

const BAI_5_NHAN_CHIA_PHAN_SO: LessonGuide = {
  bai_id: 'CT_G6_C2_B5',
  chuong: 5,
  so_tiet: 3,
  tieu_de: 'Bài 5: Phép nhân và phép chia phân số',
  muc_tieu: [
    'Thực hiện thành thạo phép nhân và phép chia hai phân số',
    'Tìm phân số nghịch đảo của một phân số khác 0',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép nhân phân số',
      noi_dung: [
        'Muốn nhân hai phân số, ta nhân các tử với nhau và nhân các mẫu với nhau: a/b × c/d = (a.c)/(b.d).',
      ],
    },
    {
      tieu_de: '2. Phép chia phân số',
      noi_dung: [
        'Muốn chia một phân số cho một phân số khác 0, ta nhân số bị chia với phân số nghịch đảo của số chia: a/b : c/d = a/b × d/c.',
      ],
    },
  ],
  cong_thuc: [
    'a/b × c/d = (a.c)/(b.d)',
    'a/b : c/d = a/b × d/c (c/d ≠ 0)',
  ],
  vi_du: [
    {
      de_bai: 'Tính: -3/5 × 2/7.',
      loi_giai: '-3/5 × 2/7 = (-3 × 2) / (5 × 7) = -6/35.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: -4/9 : 2/3.',
      dap_an: '-4/9 × 3/2 = -12/18 = -2/3.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Phân số nghịch đảo của -3/4 là:',
      dap_an: ['3/4', '-4/3', '4/3', '4/-3'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Hai số gọi là nghịch đảo của nhau nếu tích của chúng bằng 1.',
  ],
};

const BAI_6_GIA_TRI_PHAN_SO: LessonGuide = {
  bai_id: 'CT_G6_C2_B6',
  chuong: 5,
  so_tiet: 1,
  tieu_de: 'Bài 6: Giá trị phân số của một số',
  muc_tieu: [
    'Biết cách tìm giá trị phân số của một số cho trước',
    'Biết tìm một số khi biết giá trị phân số của nó',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tìm giá trị phân số của một số',
      noi_dung: [
        'Muốn tìm giá trị phân số m/n của một số a, ta tính: a × m/n.',
      ],
    },
    {
      tieu_de: '2. Tìm một số khi biết giá trị phân số',
      noi_dung: [
        'Muốn tìm một số khi biết m/n của nó bằng b, ta tính: b : m/n.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm 2/3 của 30 học sinh.',
      loi_giai: 'Giá trị cần tìm là: 30 × 2/3 = 20 học sinh.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm một số biết 3/5 của số đó là 15.',
      dap_an: 'Số cần tìm: 15 : 3/5 = 15 × 5/3 = 25.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Một rổ táo có 24 quả. Bạn An ăn mất 1/4 số táo. Số táo còn lại trong rổ là:',
      dap_an: ['6 quả', '18 quả', '20 quả', '8 quả'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Để phân biệt hai bài toán: "của một số" -> nhân; "biết giá trị..." -> chia.',
  ],
};

const BAI_7_HON_SO: LessonGuide = {
  bai_id: 'CT_G6_C2_B7',
  chuong: 5,
  so_tiet: 2,
  tieu_de: 'Bài 7: Hỗn số',
  muc_tieu: [
    'Nhận biết và viết được hỗn số',
    'Biết đổi phân số lớn hơn 1 thành hỗn số và ngược lại',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Hỗn số',
      noi_dung: [
        'Khi viết một phân số dương lớn hơn 1 thành dạng q p/s (với q là phần nguyên, p/s là phần phân số nhỏ hơn 1).',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Đổi phân số 13/4 thành hỗn số.',
      loi_giai: '13 chia 4 được 3 dư 1. Vậy 13/4 = 3 1/4.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết hỗn số 2 3/5 dưới dạng phân số.',
      dap_an: '2 3/5 = (2 × 5 + 3)/5 = 13/5.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hỗn số 3 1/2 tương đương với phân số nào?',
      dap_an: ['3/2', '5/2', '7/2', '4/2'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Chỉ các phân số lớn hơn 1 (tử lớn hơn mẫu) mới đổi được thành hỗn số.',
  ],
};

const BAI_9_SO_THAP_PHAN: LessonGuide = {
  bai_id: 'CT_G6_C2_B9',
  chuong: 6,
  so_tiet: 2,
  tieu_de: 'Bài 1: Số thập phân',
  muc_tieu: [
    'Hiểu khái niệm số thập phân, số thập phân âm',
    'Nhận biết hàng của số thập phân và so sánh các số thập phân',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Số thập phân',
      noi_dung: [
        'Phân số thập phân là phân số có mẫu là lũy thừa của 10.',
        'Các phân số thập phân có thể viết dưới dạng số thập phân gồm phần nguyên và phần thập phân ngăn cách bởi dấu phẩy.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Viết phân số -27/100 dưới dạng số thập phân.',
      loi_giai: '-27/100 = -0.27.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'So sánh -1.5 và -1.2.',
      dap_an: 'Vì 1.5 > 1.2 nên -1.5 < -1.2.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Số thập phân nào lớn nhất trong các số sau?',
      dap_an: ['-3.4', '-0.5', '-1.2', '-4.0'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Mọi số thập phân âm đều nhỏ hơn 0.',
  ],
};

const BAI_10_PHEP_TINH_SO_THAP_PHAN: LessonGuide = {
  bai_id: 'CT_G6_C2_B10',
  chuong: 6,
  so_tiet: 2,
  tieu_de: 'Bài 2: Các phép tính với số thập phân',
  muc_tieu: [
    'Thực hiện thành thạo cộng, trừ, nhân, chia số thập phân',
    'Áp dụng tính chất phép tính để tính toán hợp lí',
  ],
  kien_thuc: [
    {
      tieu_de: 'Cộng, trừ, nhân, chia số thập phân',
      noi_dung: [
        'Quy tắc dấu tương tự như đối với số nguyên.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tính: -1.25 × 0.8.',
      loi_giai: '-1.25 × 0.8 = -1.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính nhanh: 1.3 + 2.75 + 0.7.',
      dap_an: '(1.3 + 0.7) + 2.75 = 2 + 2.75 = 4.75.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Kết quả của -2.5 : (-0.5) là:',
      dap_an: ['-5', '5', '-0.5', '0.5'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Nhân một số với 0.1, 0.01... tương đương dịch dấu phẩy sang trái 1, 2... chữ số.',
  ],
};

const BAI_11_LAM_TRON_SO: LessonGuide = {
  bai_id: 'CT_G6_C2_B11',
  chuong: 6,
  so_tiet: 2,
  tieu_de: 'Bài 3: Làm tròn số thập phân và ước lượng kết quả',
  muc_tieu: [
    'Biết làm tròn số thập phân đến hàng cho trước',
    'Áp dụng ước lượng kết quả phép tính trong các bài toán thực tế',
  ],
  kien_thuc: [
    {
      tieu_de: 'Quy tắc làm tròn số',
      noi_dung: [
        'Nếu chữ số đầu tiên bỏ đi nhỏ hơn 5 thì giữ nguyên chữ số hàng làm tròn.',
        'Nếu chữ số đầu tiên bỏ đi lớn hơn hoặc bằng 5 thì cộng thêm 1 vào chữ số hàng làm tròn.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Làm tròn số 3.1416 đến hàng phần trăm.',
      loi_giai: 'Chữ số ở hàng phần trăm là 4. Chữ số ngay sau nó là 1 < 5. Nên giữ nguyên: 3.1416 ≈ 3.14.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Làm tròn 7.85 đến hàng phần mười.',
      dap_an: 'Chữ số ngay sau hàng phần mười là 5 ≥ 5. Cộng thêm 1: 7.85 ≈ 7.9.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Làm tròn 124.5 đến hàng đơn vị được:',
      dap_an: ['124', '125', '120', '130'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Khi làm tròn phần nguyên, nhớ thay thế các chữ số bỏ đi bằng chữ số 0.',
  ],
};

const BAI_12_TI_SO_PHAN_TRAM: LessonGuide = {
  bai_id: 'CT_G6_C2_B12',
  chuong: 6,
  so_tiet: 2,
  tieu_de: 'Bài 4: Tỉ số và số phần trăm',
  muc_tieu: [
    'Hiểu khái niệm tỉ số của hai số',
    'Biết cách tính tỉ số phần trăm của hai số',
  ],
  kien_thuc: [
    {
      tieu_de: 'Tỉ số và tỉ số phần trăm',
      noi_dung: [
        'Tỉ số của a và b (b ≠ 0) là a/b.',
        'Tỉ số phần trăm của a và b là (a.100)/b %.',
      ],
    },
  ],
  cong_thuc: [
    'Tỉ số phần trăm = (a.100)/b %',
  ],
  vi_du: [
    {
      de_bai: 'Tính tỉ số phần trăm của 3 và 5.',
      loi_giai: '(3 × 100) / 5 % = 60%.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Một hộp trà có 20 gói, đã uống 5 gói. Tính tỉ số phần trăm số gói trà đã uống.',
      dap_an: '(5 × 100) / 20 % = 25%.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tỉ số phần trăm của 1 và 4 là:',
      dap_an: ['10%', '20%', '25%', '40%'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Tỉ số phần trăm biểu diễn tỷ lệ so với 100 phần.',
  ],
};

const BAI_13_BAI_TOAN_TI_SO_PHAN_TRAM: LessonGuide = {
  bai_id: 'CT_G6_C2_B13',
  chuong: 6,
  so_tiet: 2,
  tieu_de: 'Bài 5: Bài toán về tỉ số phần trăm',
  muc_tieu: [
    'Giải được hai bài toán cơ bản về tỉ số phần trăm',
    'Áp dụng tính phần trăm giảm giá, lãi suất trong thực tế',
  ],
  kien_thuc: [
    {
      tieu_de: 'Các bài toán tỉ số phần trăm',
      noi_dung: [
        'Tìm p% của số a: a × p/100.',
        'Tìm một số biết p% của nó bằng b: b : (p/100).',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm 15% của 200 000 đồng.',
      loi_giai: '200 000 × 15% = 30 000 đồng.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Một chiếc áo giảm giá 20% còn 160 000 đồng. Hỏi giá gốc chiếc áo là bao nhiêu?',
      dap_an: 'Giá sau giảm tương ứng: 100% - 20% = 80% giá gốc. Giá gốc chiếc áo: 160 000 : 80% = 200 000 đồng.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tìm một số biết 10% của nó bằng 50.',
      dap_an: ['5', '50', '500', '5000'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Giá bán mới = Giá cũ × (100% - %giảm).',
  ],
};

const BAI_15_TRUC_DOI_XUNG: LessonGuide = {
  bai_id: 'CT_G6_C2_B15',
  chuong: 7,
  so_tiet: 2,
  tieu_de: 'Bài 1: Hình có trục đối xứng',
  muc_tieu: [
    'Nhận biết hình có trục đối xứng',
    'Tìm và vẽ được trục đối xứng của các hình học phẳng cơ bản',
  ],
  kien_thuc: [
    {
      tieu_de: 'Trục đối xứng',
      noi_dung: [
        'Đường thẳng d là trục đối xứng của một hình nếu gấp hình đó theo đường d thì hai nửa hình chồng khít lên nhau.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tìm số trục đối xứng của hình vuông.',
      loi_giai: 'Hình vuông có 4 trục đối xứng (2 đường chéo và 2 đường trung trực của các cạnh đối).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Chữ cái nào sau đây có trục đối xứng: A, F, Z?',
      dap_an: 'Chữ A (có 1 trục đối xứng dọc).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Đường tròn có bao nhiêu trục đối xứng?',
      dap_an: ['1', '2', '4', 'Vô số'],
      dap_an_dung: 3,
    },
  ],
  ghi_nho: [
    'Trục đối xứng chia hình thành hai phần đối xứng gương với nhau.',
  ],
};

const BAI_16_TAM_DOI_XUNG: LessonGuide = {
  bai_id: 'CT_G6_C2_B16',
  chuong: 7,
  so_tiet: 2,
  tieu_de: 'Bài 2: Hình có tâm đối xứng',
  muc_tieu: [
    'Nhận biết hình có tâm đối xứng',
    'Xác định được tâm đối xứng của một số hình cơ bản',
  ],
  kien_thuc: [
    {
      tieu_de: 'Tâm đối xứng',
      noi_dung: [
        'Điểm O gọi là tâm đối xứng của một hình nếu quay hình đó quanh O một góc 180° thì hình thu được chồng khít lên chính nó ở vị trí ban đầu.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Xác định tâm đối xứng của hình tròn.',
      loi_giai: 'Tâm đối xứng của hình tròn chính là tâm của đường tròn đó.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Hình tam giác đều có tâm đối xứng không?',
      dap_an: 'Không, hình tam giác đều chỉ có trục đối xứng chứ không có tâm đối xứng.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hình nào sau đây có tâm đối xứng?',
      dap_an: ['Hình tam giác đều', 'Hình chữ nhật', 'Hình thang cân', 'Hình trái tim'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Tâm đối xứng của hình bình hành, hình thoi, hình chữ nhật là giao điểm của hai đường chéo.',
  ],
};

const BAI_17_VAI_TRO_DOI_XUNG: LessonGuide = {
  bai_id: 'CT_G6_C2_B17',
  chuong: 7,
  so_tiet: 1,
  tieu_de: 'Bài 3: Vai trò của tính đối xứng trong thế giới tự nhiên',
  muc_tieu: [
    'Nhận biết vẻ đẹp và ứng dụng của tính đối xứng trong tự nhiên, nghệ thuật, kiến trúc',
  ],
  kien_thuc: [
    {
      tieu_de: 'Đối xứng trong tự nhiên',
      noi_dung: [
        'Các sinh vật (con bướm, bông hoa, chiếc lá), kiến trúc (chùa Một Cột, tháp Eiffel) có tính đối xứng giúp cân bằng, thẩm mỹ và vững chắc.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Nêu ví dụ về tính đối xứng trong tự nhiên.',
      loi_giai: 'Con bướm (trục đối xứng dọc), bông tuyết (đối xứng tâm và trục).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Kể tên một công trình kiến trúc nổi tiếng ở Việt Nam có tính đối xứng.',
      dap_an: 'Khuê Văn Các, Chùa Một Cột, hoặc Dinh Thống Nhất.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Vì sao các công trình xây dựng thường sử dụng thiết kế đối xứng?',
      dap_an: ['Để tiết kiệm vật liệu', 'Để tạo sự vững chãi, cân bằng và tính thẩm mỹ cao', 'Để xây nhanh hơn', 'Không có lý do đặc biệt'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Tính đối xứng tạo nên sự cân đối hài hòa cho vạn vật.',
  ],
};

const BAI_19_DIEM_DUONG_THANG: LessonGuide = {
  bai_id: 'CT_G6_C2_B19',
  chuong: 8,
  so_tiet: 1,
  tieu_de: 'Bài 1: Điểm. Đường thẳng',
  muc_tieu: [
    'Nhận biết khái niệm điểm và đường thẳng',
    'Biết cách biểu diễn điểm thuộc/không thuộc đường thẳng bằng kí hiệu',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Điểm và đường thẳng',
      noi_dung: [
        'Điểm được đặt tên bằng các chữ cái in hoa: A, B, C...',
        'Đường thẳng được đặt tên bằng các chữ cái thường: a, b, c...',
      ],
    },
    {
      tieu_de: '2. Quan hệ thuộc',
      noi_dung: [
        'A ∈ d: Điểm A thuộc đường thẳng d.',
        'B ∉ d: Điểm B không thuộc đường thẳng d.',
      ],
    },
  ],
  cong_thuc: [
    'A ∈ d',
    'B ∉ d',
  ],
  vi_du: [
    {
      de_bai: 'Nêu cách vẽ điểm A nằm trên đường thẳng a.',
      loi_giai: 'Vẽ một nét thẳng biểu diễn đường thẳng a, đánh dấu một chấm tròn nhỏ A nằm trên nét vẽ đó.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Cho hình vẽ điểm M nằm ngoài đường thẳng xy. Viết kí hiệu liên hệ.',
      dap_an: 'M ∉ xy.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Có bao nhiêu đường thẳng đi qua hai điểm phân biệt cho trước?',
      dap_an: ['1', '2', 'Vô số', '0'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Qua hai điểm phân biệt có một và chỉ một đường thẳng.',
  ],
};

const BAI_20_BA_DIEM_THANG_HANG: LessonGuide = {
  bai_id: 'CT_G6_C2_B20',
  chuong: 8,
  so_tiet: 2,
  tieu_de: 'Bài 2: Ba điểm thẳng hàng. Ba điểm không thẳng hàng',
  muc_tieu: [
    'Nhận biết ba điểm thẳng hàng và ba điểm không thẳng hàng',
    'Hiểu quan hệ nằm giữa của các điểm thẳng hàng',
  ],
  kien_thuc: [
    {
      tieu_de: 'Ba điểm thẳng hàng',
      noi_dung: [
        'Khi ba điểm cùng thuộc một đường thẳng, ta nói chúng thẳng hàng.',
        'Khi ba điểm không cùng thuộc bất kì đường thẳng nào, ta nói chúng không thẳng hàng.',
        'Trong ba điểm thẳng hàng, có một và chỉ một điểm nằm giữa hai điểm còn lại.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho ba điểm A, B, C thẳng hàng theo thứ tự đó. Điểm nào nằm giữa hai điểm còn lại?',
      loi_giai: 'Điểm B nằm giữa hai điểm A và C.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Nếu A, B, C thẳng hàng và B nằm giữa A và C. Điểm A và C nằm như thế nào đối với B?',
      dap_an: 'Điểm A và C nằm khác phía đối với điểm B.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Nếu ba điểm A, B, C cùng nằm trên đường thẳng d thì chúng gọi là:',
      dap_an: ['Không thẳng hàng', 'Thẳng hàng', 'Trùng nhau', 'Song song'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Nếu điểm B nằm giữa A và C thì AB + BC = AC.',
  ],
};

const BAI_21_HAI_DUONG_THANG_TIA: LessonGuide = {
  bai_id: 'CT_G6_C2_B21',
  chuong: 8,
  so_tiet: 2,
  tieu_de: 'Bài 3: Hai đường thẳng cắt nhau, song song. Tia',
  muc_tieu: [
    'Nhận biết hai đường thẳng cắt nhau, hai đường thẳng song song',
    'Hiểu khái niệm tia, gốc của tia và hai tia đối nhau',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Quan hệ giữa hai đường thẳng',
      noi_dung: [
        'Cắt nhau: chỉ có 1 điểm chung (gọi là giao điểm).',
        'Song song: không có điểm chung nào.',
      ],
    },
    {
      tieu_de: '2. Tia',
      noi_dung: [
        'Hình gồm điểm O và một phần đường thẳng bị chia ra bởi điểm O gọi là một tia gốc O.',
        'Hai tia chung gốc và tạo thành một đường thẳng gọi là hai tia đối nhau.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho điểm O nằm giữa hai điểm A và B. Hãy tìm hai tia đối nhau gốc O.',
      loi_giai: 'Hai tia đối nhau gốc O là tia OA và tia OB.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Vẽ hai đường thẳng x, y song song với nhau.',
      dap_an: 'Vẽ hai nét thẳng nằm ngang song song song không có giao điểm.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hai tia đối nhau phải thỏa mãn điều kiện nào?',
      dap_an: ['Song song với nhau', 'Chung gốc và nằm trên cùng một đường thẳng về hai phía', 'Cắt nhau', 'Có cùng độ dài'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Khi viết tên một tia, chữ cái chỉ gốc luôn viết trước.',
  ],
};

const BAI_22_DOAN_THANG: LessonGuide = {
  bai_id: 'CT_G6_C2_B22',
  chuong: 8,
  so_tiet: 2,
  tieu_de: 'Bài 4: Đoạn thẳng. Độ dài đoạn thẳng',
  muc_tieu: [
    'Hiểu khái niệm đoạn thẳng và độ dài đoạn thẳng',
    'Biết cách so sánh hai đoạn thẳng dựa trên số đo độ dài',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Đoạn thẳng',
      noi_dung: [
        'Đoạn thẳng AB là hình gồm điểm A, điểm B và tất cả các điểm nằm giữa A và B.',
      ],
    },
    {
      tieu_de: '2. Độ dài đoạn thẳng',
      noi_dung: [
        'Mỗi đoạn thẳng có một độ dài là một số dương.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho AB = 6cm, CD = 5cm. Hãy so sánh hai đoạn thẳng này.',
      loi_giai: 'Vì 6cm > 5cm nên AB > CD.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Nếu điểm M nằm giữa A và B. Biết AM = 2cm, AB = 6cm. Tính MB.',
      dap_an: 'Vì M nằm giữa A và B nên AM + MB = AB => MB = AB - AM = 6 - 2 = 4cm.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khi nào ta có đẳng thức AM + MB = AB?',
      dap_an: ['M trùng với A', 'M nằm giữa A và B', 'M nằm ngoài đoạn thẳng AB', 'AM = MB'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Khoảng cách giữa hai điểm A và B chính là độ dài đoạn thẳng AB.',
  ],
};

const BAI_23_TRUNG_DIEM: LessonGuide = {
  bai_id: 'CT_G6_C2_B23',
  chuong: 8,
  so_tiet: 2,
  tieu_de: 'Bài 5: Trung điểm của đoạn thẳng',
  muc_tieu: [
    'Hiểu khái niệm trung điểm của đoạn thẳng',
    'Biết cách xác định trung điểm của một đoạn thẳng bằng thước đo',
  ],
  kien_thuc: [
    {
      tieu_de: 'Trung điểm',
      noi_dung: [
        'Trung điểm M của đoạn thẳng AB là điểm nằm giữa hai điểm A, B và cách đều hai điểm đó (AM = MB).',
        'Khi đó AM = MB = AB/2.',
      ],
    },
  ],
  cong_thuc: [
    'AM = MB = AB/2',
  ],
  vi_du: [
    {
      de_bai: 'Cho đoạn thẳng CD = 8cm. Điểm I là trung điểm của CD. Tính độ dài IC.',
      loi_giai: 'Vì I là trung điểm của CD nên IC = CD / 2 = 8 / 2 = 4cm.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Cách vẽ trung điểm của đoạn thẳng dài 10cm bằng thước thẳng.',
      dap_an: 'Đặt thước đo trùng với đoạn thẳng, vạch 0 ở đầu mút thứ nhất. Đánh dấu điểm ở vạch 5cm.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'M là trung điểm của AB khi và chỉ khi:',
      dap_an: ['MA = MB', 'M nằm giữa A và B', 'M nằm giữa A, B và MA = MB', 'M trùng với O'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Trung điểm chia đoạn thẳng thành hai đoạn thẳng bằng nhau.',
  ],
};

const BAI_24_GOC: LessonGuide = {
  bai_id: 'CT_G6_C2_B24',
  chuong: 8,
  so_tiet: 2,
  tieu_de: 'Bài 6: Góc',
  muc_tieu: [
    'Nhận biết góc, đỉnh và các cạnh của góc',
    'Biết cách gọi tên góc và nhận dạng góc bẹt',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Góc là gì?',
      noi_dung: [
        'Góc là hình gồm hai tia chung gốc. Gốc chung gọi là đỉnh của góc, hai tia gọi là hai cạnh của góc.',
        'Kí hiệu: ∠xOy hoặc xÔy.',
      ],
    },
    {
      tieu_de: '2. Góc bẹt',
      noi_dung: [
        'Góc bẹt là góc có hai cạnh là hai tia đối nhau.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho góc mOn. Xác định đỉnh và cạnh của góc này.',
      loi_giai: 'Đỉnh là O, các cạnh là hai tia Om và On.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Vẽ góc xOy khác góc bẹt.',
      dap_an: 'Vẽ hai tia Ox và Oy chung gốc O sao cho chúng không tạo thành một đường thẳng.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hình gồm hai tia đối nhau tạo thành góc gì?',
      dap_an: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'],
      dap_an_dung: 3,
    },
  ],
  ghi_nho: [
    'Một góc chia mặt phẳng thành các điểm trong và điểm ngoài của góc.',
  ],
};

const BAI_25_SO_DO_GOC: LessonGuide = {
  bai_id: 'CT_G6_C2_B25',
  chuong: 8,
  so_tiet: 2,
  tieu_de: 'Bài 7: Số đo góc. Các góc đặc biệt',
  muc_tieu: [
    'Biết đo góc bằng thước đo góc',
    'Phân loại được các góc đặc biệt: góc nhọn, góc vuông, góc tù, góc bẹt',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Số đo góc',
      noi_dung: [
        'Mỗi góc có một số đo xác định. Số đo góc bẹt là 180°.',
      ],
    },
    {
      tieu_de: '2. Các loại góc',
      noi_dung: [
        'Góc vuông = 90°.',
        'Góc nhọn < 90°.',
        '90° < Góc tù < 180°.',
        'Góc bẹt = 180°.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho góc xOy có số đo là 120°. Góc này thuộc loại góc nào?',
      loi_giai: 'Vì 90° < 120° < 180° nên góc xOy là góc tù.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'So sánh góc 45° và góc 90°.',
      dap_an: 'Góc 45° nhỏ hơn góc 90°.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Góc nhọn là góc có số đo:',
      dap_an: ['Bằng 90°', 'Lớn hơn 90°', 'Nhỏ hơn 90° và lớn hơn 0°', 'Bằng 180°'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Kí hiệu của góc vuông thường được đánh dấu hình vuông nhỏ ở đỉnh.',
  ],
};

const BAI_27_PHEP_THU_NGHIEM_SU_KIEN: LessonGuide = {
  bai_id: 'CT_G6_C2_B27',
  chuong: 9,
  so_tiet: 2,
  tieu_de: 'Bài 1: Phép thử nghiệm – Sự kiện',
  muc_tieu: [
    'Làm quen với khái niệm phép thử nghiệm trong thực tế',
    'Liệt kê được tất cả kết quả có thể xảy ra của một phép thử nghiệm đơn giản',
  ],
  kien_thuc: [
    {
      tieu_de: 'Phép thử nghiệm và sự kiện',
      noi_dung: [
        'Khi thực hiện một hành động (phép thử) mà kết quả không thể biết trước, ta gọi là phép thử nghiệm.',
        'Sự kiện xảy ra hay không xảy ra tùy thuộc vào kết quả của phép thử nghiệm đó.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tung một đồng xu 1 lần. Liệt kê các kết quả có thể xảy ra.',
      loi_giai: 'Các kết quả có thể xảy ra là: Mặt Sấp (S) hoặc Mặt Ngửa (N).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Gieo một con xúc xắc 6 mặt. Liệt kê các kết quả của sự kiện: "Xuất hiện số chấm lẻ".',
      dap_an: 'Mặt 1 chấm, Mặt 3 chấm, Mặt 5 chấm.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tung đồng xu 2 lần, kết quả nào sau đây là không thể?',
      dap_an: ['SS', 'NN', 'NS', 'Mặt 3 chấm'],
      dap_an_dung: 3,
    },
  ],
  ghi_nho: [
    'Liệt kê đầy đủ các kết quả giúp phân tích xác suất chính xác.',
  ],
};

const BAI_28_XAC_SUAT_THUC_NGHIEM: LessonGuide = {
  bai_id: 'CT_G6_C2_B28',
  chuong: 9,
  so_tiet: 3,
  tieu_de: 'Bài 2: Xác suất thực nghiệm',
  muc_tieu: [
    'Hiểu khái niệm và tính được xác suất thực nghiệm của một sự kiện sau nhiều lần thử nghiệm',
  ],
  kien_thuc: [
    {
      tieu_de: 'Xác suất thực nghiệm',
      noi_dung: [
        'Công thức tính: P = (Số lần sự kiện xảy ra) / (Tổng số lần thử nghiệm).',
      ],
    },
  ],
  cong_thuc: [
    'Xác suất thực nghiệm = k / n',
  ],
  vi_du: [
    {
      de_bai: 'Tung đồng xu 50 lần, thấy có 24 lần xuất hiện mặt ngửa. Tính xác suất thực nghiệm của sự kiện "xuất hiện mặt ngửa".',
      loi_giai: 'P = 24 / 50 = 12/25 = 48%.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Gieo một con xúc xắc 100 lần, thấy mặt 6 chấm xuất hiện 18 lần. Tính xác suất thực nghiệm mặt 6 chấm.',
      dap_an: 'P = 18 / 100 = 9/50 = 18%.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Xác suất thực nghiệm của một sự kiện luôn nhận giá trị từ:',
      dap_an: ['-1 đến 1', '0 đến 100', '0 đến 1', 'Lớn hơn 1'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Số lần thử nghiệm càng lớn thì xác suất thực nghiệm càng tiến gần tới xác suất lí thuyết.',
  ],
};

export const CHAN_TROI_TOAN_6_HK2_GUIDES: LessonGuide[] = [
  BAI_1_PHAN_SO_SO_NGUYEN, BAI_2_TINH_CHAT_CO_BAN, BAI_3_SO_SANH_PHAN_SO,
  BAI_4_CONG_TRU_PHAN_SO, BAI_5_NHAN_CHIA_PHAN_SO, BAI_6_GIA_TRI_PHAN_SO,
  BAI_7_HON_SO, BAI_9_SO_THAP_PHAN, BAI_10_PHEP_TINH_SO_THAP_PHAN,
  BAI_11_LAM_TRON_SO, BAI_12_TI_SO_PHAN_TRAM, BAI_13_BAI_TOAN_TI_SO_PHAN_TRAM,
  BAI_15_TRUC_DOI_XUNG, BAI_16_TAM_DOI_XUNG, BAI_17_VAI_TRO_DOI_XUNG,
  BAI_19_DIEM_DUONG_THANG, BAI_20_BA_DIEM_THANG_HANG, BAI_21_HAI_DUONG_THANG_TIA,
  BAI_22_DOAN_THANG, BAI_23_TRUNG_DIEM, BAI_24_GOC, BAI_25_SO_DO_GOC,
  BAI_27_PHEP_THU_NGHIEM_SU_KIEN, BAI_28_XAC_SUAT_THUC_NGHIEM,
];

export function getLessonGuideByTimelineNameCTSTHK2(tenBai: string): LessonGuide | undefined {
  for (const guide of CHAN_TROI_TOAN_6_HK2_GUIDES) {
    const baiNumber = guide.tieu_de.match(/Bài (\d+)/)?.[1];
    if (baiNumber && tenBai.includes(`Bài ${baiNumber}:`)) {
      return guide;
    }
  }
  return undefined;
}
