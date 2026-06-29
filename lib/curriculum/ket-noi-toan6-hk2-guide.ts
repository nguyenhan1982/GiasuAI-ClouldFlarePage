// ============================================================
// HƯỚNG DẪN CHI TIẾT - TOÁN 6 HK2 - KẾT NỐI TRI THỨC
// Dữ liệu trích xuất từ Giáo án chính thức
// ============================================================

import { LessonGuide } from './canh-dieu-toan6-hk1-guide';

// ============================================================
// CHƯƠNG VI: PHÂN SỐ (Bài 23 - Bài 27)
// ============================================================

const BAI_23_MO_RONG_PHAN_SO: LessonGuide = {
  bai_id: 'KN_G6_C6_B23',
  chuong: 6,
  so_tiet: 3,
  tieu_de: 'Bài 23: Mở rộng phân số. Phân số bằng nhau',
  muc_tieu: [
    'Hiểu khái niệm phân số với tử và mẫu là số nguyên',
    'Nhận biết điều kiện để hai phân số bằng nhau: a/b = c/d ⇔ a.d = b.c',
    'Áp dụng tính chất cơ bản của phân số để rút gọn phân số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Khái niệm phân số',
      noi_dung: [
        'Kết quả của phép chia số nguyên a cho số nguyên b khác 0 có dạng a/b, gọi là phân số.',
        'a là tử số (tử), b là mẫu số (mẫu).',
      ],
    },
    {
      tieu_de: '2. Phân số bằng nhau',
      noi_dung: [
        'Hai phân số a/b và c/d gọi là bằng nhau nếu a.d = b.c.',
      ],
    },
    {
      tieu_de: '3. Tính chất cơ bản của phân số',
      noi_dung: [
        'Nhân cả tử và mẫu với cùng số nguyên khác 0 ta được phân số bằng phân số đã cho: a/b = (a.m)/(b.m) (m ≠ 0).',
        'Chia cả tử và mẫu cho cùng một ước chung của chúng ta được phân số bằng phân số đã cho: a/b = (a:n)/(b:n) (n ∈ ƯC(a,b)).',
      ],
    },
  ],
  cong_thuc: [
    'a/b = c/d ⇔ a.d = b.c (b, d ≠ 0)',
    'a/b = (a.m)/(b.m) (m ≠ 0)',
    'a/b = (a:n)/(b:n) (n ∈ ƯC(a,b))',
  ],
  vi_du: [
    {
      de_bai: 'Giải thích vì sao hai phân số -3/4 và 6/-8 bằng nhau.',
      loi_giai: 'Ta có: (-3) × (-8) = 24 và 4 × 6 = 24. Vì (-3) × (-8) = 4 × 6 nên -3/4 = 6/-8.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Rút gọn phân số: -15/25.',
      dap_an: 'Chia cả tử và mẫu cho 5: -15 : 5 / (25 : 5) = -3/5.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hai phân số a/b và c/d bằng nhau khi nào?',
      dap_an: ['a.c = b.d', 'a.d = b.c', 'a + d = b + c', 'a.b = c.d'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Tử và mẫu của phân số có thể là các số nguyên (mẫu khác 0).',
    'Muốn rút gọn phân số ta chia cả tử và mẫu cho ước chung lớn nhất (hoặc ước chung) của chúng.',
  ],
};

const BAI_24_SO_SANH_PHAN_SO: LessonGuide = {
  bai_id: 'KN_G6_C6_B24',
  chuong: 6,
  so_tiet: 3,
  tieu_de: 'Bài 24: So sánh hai phân số. Hỗn số dương',
  muc_tieu: [
    'Biết cách quy đồng mẫu nhiều phân số',
    'So sánh hai phân số cùng mẫu và khác mẫu',
    'Nhận biết và viết được hỗn số dương',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Quy đồng mẫu nhiều phân số',
      noi_dung: [
        'Bước 1: Tìm một bội chung (thường là BCNN) của các mẫu để làm mẫu chung.',
        'Bước 2: Tìm thừa số phụ của mỗi mẫu bằng cách chia mẫu chung cho từng mẫu.',
        'Bước 3: Nhân tử và mẫu của mỗi phân số với thừa số phụ tương ứng.',
      ],
    },
    {
      tieu_de: '2. So sánh hai phân số',
      noi_dung: [
        'Trong hai phân số có cùng mẫu dương, phân số nào có tử lớn hơn thì lớn hơn.',
        'Muốn so sánh hai phân số khác mẫu, ta quy đồng mẫu dương của chúng rồi so sánh các tử.',
      ],
    },
    {
      tieu_de: '3. Hỗn số dương',
      noi_dung: [
        'Viết một phân số lớn hơn 1 dưới dạng một tổng của một số tự nhiên và một phân số nhỏ hơn 1.',
        'Ví dụ: 7/4 = 1 + 3/4 = 1 3/4.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'So sánh hai phân số: -5/8 và -7/12.',
      loi_giai: 'BCNN(8, 12) = 24.\n-5/8 = -15/24; -7/12 = -14/24.\nVì -15 < -14 nên -15/24 < -14/24. Vậy -5/8 < -7/12.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết phân số 11/3 dưới dạng hỗn số.',
      dap_an: '11 : 3 = 3 dư 2. Vậy 11/3 = 3 2/3.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Phân số nào lớn hơn trong các phân số sau?',
      dap_an: ['-3/5', '-4/5', '1/5', '-1/5'],
      dap_an_dung: 2,
      giai_thich: 'Phân số dương luôn lớn hơn phân số âm: 1/5 > 0.',
    },
  ],
  ghi_nho: [
    'Quy đồng mẫu số giúp đưa các phân số về cùng một mẫu dương để so sánh và tính toán.',
    'Hỗn số dương gồm phần nguyên (số tự nhiên) và phần phân số (phân số dương nhỏ hơn 1).',
  ],
};

const BAI_25_CONG_TRU_PHAN_SO: LessonGuide = {
  bai_id: 'KN_G6_C6_B25',
  chuong: 6,
  so_tiet: 4,
  tieu_de: 'Bài 25: Phép cộng và phép trừ phân số',
  muc_tieu: [
    'Thực hiện phép cộng và trừ phân số cùng mẫu và khác mẫu',
    'Vận dụng các tính chất giao hoán, kết hợp để tính nhanh',
    'Nhận biết số đối của phân số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép cộng phân số',
      noi_dung: [
        'Cộng phân số cùng mẫu: cộng các tử và giữ nguyên mẫu: a/m + b/m = (a + b)/m.',
        'Cộng phân số khác mẫu: quy đồng mẫu số rồi thực hiện cộng cùng mẫu.',
        'Tính chất: Giao hoán: a/b + c/d = c/d + a/b; Kết hợp: (a/b + c/d) + p/q = a/b + (c/d + p/q).',
      ],
    },
    {
      tieu_de: '2. Số đối',
      noi_dung: [
        'Hai phân số đối nhau có tổng bằng 0.',
        'Số đối của a/b kí hiệu là -a/b: a/b + (-a/b) = 0.',
      ],
    },
    {
      tieu_de: '3. Phép trừ phân số',
      noi_dung: [
        'Muốn trừ một phân số cho một phân số, ta cộng số bị trừ với số đối của số trừ: a/b - c/d = a/b + (-c/d).',
      ],
    },
  ],
  cong_thuc: [
    'a/m + b/m = (a + b)/m',
    'a/b - c/d = a/b + (-c/d)',
  ],
  vi_du: [
    {
      de_bai: 'Tính: -3/5 + 1/4.',
      loi_giai: 'Quy đồng mẫu chung là 20:\n-3/5 + 1/4 = -12/20 + 5/20 = -7/20.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: 3/8 - 5/6.',
      dap_an: 'Mẫu chung 24:\n3/8 - 5/6 = 9/24 - 20/24 = -11/24.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Số đối của phân số -3/7 là:',
      dap_an: ['3/7', '-7/3', '7/3', '-3/7'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Muốn trừ phân số ta cộng với số đối của phân số đó.',
    'Nhớ rút gọn kết quả về phân số tối giản.',
  ],
};

const BAI_26_NHAN_CHIA_PHAN_SO: LessonGuide = {
  bai_id: 'KN_G6_C6_B26',
  chuong: 6,
  so_tiet: 4,
  tieu_de: 'Bài 26: Phép nhân và phép chia phân số',
  muc_tieu: [
    'Thực hiện phép nhân và phép chia phân số',
    'Vận dụng các tính chất của phép nhân phân số để tính hợp lí',
    'Tìm phân số nghịch đảo của một phân số khác 0',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Phép nhân phân số',
      noi_dung: [
        'Muốn nhân hai phân số, ta nhân các tử với nhau và nhân các mẫu với nhau: a/b × c/d = (a.c)/(b.d).',
        'Tính chất: Giao hoán, kết hợp, nhân với 1, phân phối đối với phép cộng và phép trừ.',
      ],
    },
    {
      tieu_de: '2. Phân số nghịch đảo',
      noi_dung: [
        'Hai phân số nghịch đảo nhau có tích bằng 1.',
        'Phân số nghịch đảo của phân số a/b (a, b ≠ 0) là b/a.',
      ],
    },
    {
      tieu_de: '3. Phép chia phân số',
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
      de_bai: 'Tính: -4/9 × 3/8.',
      loi_giai: '-4/9 × 3/8 = (-4 × 3)/(9 × 8) = -12/72 = -1/6.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính: -5/12 : 15/4.',
      dap_an: '-5/12 × 4/15 = (-5 × 4)/(12 × 15) = -20/180 = -1/9.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Phân số nghịch đảo của -2/5 là:',
      dap_an: ['2/5', '-5/2', '5/2', '5/-2'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Chia phân số thực chất là nhân với phân số nghịch đảo.',
    'Nhớ rút gọn các thừa số trước khi nhân tích để tính toán nhanh hơn.',
  ],
};

const BAI_27_HAI_BAI_TOAN_PHAN_SO: LessonGuide = {
  bai_id: 'KN_G6_C6_B27',
  chuong: 6,
  so_tiet: 4,
  tieu_de: 'Bài 27: Hai bài toán về phân số',
  muc_tieu: [
    'Biết cách tìm giá trị phân số của một số cho trước',
    'Biết cách tìm một số khi biết giá trị phân số của nó',
    'Giải quyết các bài toán thực tiễn liên quan đến phân số',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tìm giá trị phân số của một số',
      noi_dung: [
        'Muốn tìm giá trị phân số m/n của một số a cho trước, ta tính: a × m/n.',
      ],
    },
    {
      tieu_de: '2. Tìm một số khi biết giá trị phân số của nó',
      noi_dung: [
        'Muốn tìm một số khi biết giá trị phân số m/n của nó bằng b, ta tính: b : m/n.',
      ],
    },
  ],
  cong_thuc: [
    'm/n của a = a × m/n',
    'Số cần tìm = b : m/n (khi biết m/n của số đó bằng b)',
  ],
  vi_du: [
    {
      de_bai: 'Tính 3/5 của 45 học sinh.',
      loi_giai: '3/5 của 45 học sinh là: 45 × 3/5 = 27 (học sinh).',
    },
    {
      de_bai: 'Tìm một số biết 2/3 của nó bằng 24.',
      loi_giai: 'Số cần tìm là: 24 : 2/3 = 24 × 3/2 = 36.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Một cửa hàng có 120 kg gạo. Buổi sáng bán được 1/3 số gạo. Hỏi cửa hàng còn lại bao nhiêu kg gạo?',
      dap_an: 'Số gạo bán buổi sáng: 120 × 1/3 = 40 (kg).\nSố gạo còn lại: 120 - 40 = 80 (kg).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Tìm một số biết 3/4 của số đó bằng 15.',
      dap_an: ['20', '45', '11.25', '60'],
      dap_an_dung: 0,
      giai_thich: 'Ta tính 15 : 3/4 = 20.',
    },
  ],
  ghi_nho: [
    'Tìm giá trị phân số: làm phép NHÂN.',
    'Tìm số khi biết giá trị phân số: làm phép CHIA.',
  ],
};

// ============================================================
// CHƯƠNG VII: SỐ THẬP PHÂN (Bài 28 - Bài 31)
// ============================================================

const BAI_28_SO_THAP_PHAN: LessonGuide = {
  bai_id: 'KN_G6_C7_B28',
  chuong: 7,
  so_tiet: 3,
  tieu_de: 'Bài 28: Số thập phân',
  muc_tieu: [
    'Hiểu khái niệm số thập phân, số thập phân âm',
    'Biết cấu tạo của số thập phân (phần nguyên, phần thập phân)',
    'So sánh được hai số thập phân',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Khái niệm số thập phân',
      noi_dung: [
        'Phân số thập phân là phân số có mẫu là lũy thừa của 10 (như 10, 100, 1000, ...).',
        'Các phân số thập phân có thể viết dưới dạng số thập phân.',
        'Ví dụ: 3/10 = 0.3; -15/100 = -0.15.',
      ],
    },
    {
      tieu_de: '2. Cấu tạo số thập phân',
      noi_dung: [
        'Gồm phần nguyên (ở bên trái dấu phẩy) và phần thập phân (ở bên phải dấu phẩy).',
      ],
    },
    {
      tieu_de: '3. So sánh hai số thập phân',
      noi_dung: [
        'So sánh số thập phân tương tự so sánh số nguyên.',
        'Mọi số thập phân âm đều nhỏ hơn 0 và nhỏ hơn mọi số thập phân dương.',
        'Nếu a, b là hai số thập phân dương và a > b thì -a < -b.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'So sánh: -12.5 và -12.8.',
      loi_giai: 'Vì 12.5 < 12.8 nên -12.5 > -12.8.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Viết các phân số sau dưới dạng số thập phân: -7/100, 23/10.',
      dap_an: '-7/100 = -0.07; 23/10 = 2.3.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khẳng định nào sau đây là đúng?',
      dap_an: ['-3.5 > -2.5', '-3.5 < -2.5', '-3.5 = -2.5', 'Không so sánh được'],
      dap_an_dung: 1,
      giai_thich: 'Vì 3.5 > 2.5 nên -3.5 < -2.5.',
    },
  ],
  ghi_nho: [
    'Số thập phân âm có dấu "-" đứng trước phần số thập phân dương.',
    'Khi viết thêm chữ số 0 vào tận cùng bên phải phần thập phân thì giá trị số đó không đổi.',
  ],
};

const BAI_29_TINH_TOAN_SO_THAP_PHAN: LessonGuide = {
  bai_id: 'KN_G6_C7_B29',
  chuong: 7,
  so_tiet: 4,
  tieu_de: 'Bài 29: Tính toán với số thập phân',
  muc_tieu: [
    'Thực hiện thành thạo cộng, trừ, nhân, chia số thập phân',
    'Vận dụng các tính chất của phép tính để tính nhẩm, tính hợp lí',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Cộng, trừ số thập phân',
      noi_dung: [
        'Áp dụng quy tắc cộng trừ số thập phân dương kết hợp với quy tắc dấu của số nguyên.',
      ],
    },
    {
      tieu_de: '2. Nhân hai số thập phân',
      noi_dung: [
        'Nhân hai số thập phân dương rồi áp dụng quy tắc dấu tương tự phép nhân số nguyên.',
      ],
    },
    {
      tieu_de: '3. Chia hai số thập phân',
      noi_dung: [
        'Thực hiện phép chia tương tự chia số thập phân dương rồi đặt dấu thích hợp.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Tính: a) -2.5 × 1.4; b) -4.5 : (-0.9).',
      loi_giai: 'a) -2.5 × 1.4 = -(2.5 × 1.4) = -3.5.\nb) -4.5 : (-0.9) = 4.5 : 0.9 = 5.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tính hợp lí: 2.5 × 12.3 × 4.',
      dap_an: '(2.5 × 4) × 12.3 = 10 × 12.3 = 123.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Kết quả của phép tính -1.2 + (-2.3) là:',
      dap_an: ['-1.1', '1.1', '-3.5', '3.5'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Quy tắc dấu của tích và thương số thập phân hoàn toàn giống số nguyên.',
    'Sử dụng các tính chất giao hoán, kết hợp để tính toán thuận tiện hơn.',
  ],
};

const BAI_30_LAM_TRON_UOC_LUONG: LessonGuide = {
  bai_id: 'KN_G6_C7_B30',
  chuong: 7,
  so_tiet: 2,
  tieu_de: 'Bài 30: Làm tròn và ước lượng',
  muc_tieu: [
    'Biết quy tắc làm tròn số thập phân đến một hàng cho trước',
    'Biết cách ước lượng kết quả các phép tính trong thực tiễn',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Quy tắc làm tròn số',
      noi_dung: [
        'Nếu chữ số đầu tiên bỏ đi nhỏ hơn 5 thì ta giữ nguyên chữ số của hàng làm tròn.',
        'Nếu chữ số đầu tiên bỏ đi lớn hơn hoặc bằng 5 thì ta cộng thêm 1 vào chữ số của hàng làm tròn.',
        'Trong cả hai trường hợp, các chữ số phần thập phân bỏ đi được thay thế bằng khoảng trống, còn các chữ số phần nguyên bỏ đi thay bằng số 0.',
      ],
    },
    {
      tieu_de: '2. Ước lượng kết quả',
      noi_dung: [
        'Làm tròn các số hạng đến hàng thích hợp trước khi tính toán để ước lượng nhanh kết quả.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Làm tròn số 12.348 đến hàng phần mười (chữ số thập phân thứ nhất).',
      loi_giai: 'Chữ số hàng phần mười là 3. Chữ số ngay sau nó là 4 (nhỏ hơn 5). Do đó giữ nguyên 3: 12.348 ≈ 12.3.',
    },
    {
      de_bai: 'Làm tròn số 127.85 đến hàng đơn vị.',
      loi_giai: 'Chữ số hàng đơn vị là 7. Chữ số ngay sau nó ở phần thập phân là 8 (lớn hơn 5). Cộng thêm 1 vào 7 thành 8: 127.85 ≈ 128.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Ước lượng kết quả phép tính: 49.3 × 10.2.',
      dap_an: 'Làm tròn: 49.3 ≈ 50; 10.2 ≈ 10. Kết quả ước lượng: 50 × 10 = 500. (Kết quả chính xác là 502.86).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Làm tròn số 3.14159 đến hàng phần trăm (chữ số thập phân thứ hai) được kết quả:',
      dap_an: ['3.1', '3.14', '3.15', '3.142'],
      dap_an_dung: 1,
      giai_thich: 'Chữ số hàng phần trăm là 4. Chữ số ngay sau nó là 1 < 5 nên giữ nguyên 4: 3.14.',
    },
  ],
  ghi_nho: [
    'Nếu chữ số đầu tiên bỏ đi ≥ 5: tăng chữ số làm tròn lên 1 đơn vị.',
    'Nếu chữ số đầu tiên bỏ đi < 5: giữ nguyên chữ số làm tròn.',
  ],
};

const BAI_31_TI_SO_PHAN_TRAM: LessonGuide = {
  bai_id: 'KN_G6_C7_B31',
  chuong: 7,
  so_tiet: 4,
  tieu_de: 'Bài 31: Một số bài toán về tỉ số phần trăm',
  muc_tieu: [
    'Hiểu khái niệm tỉ số của hai số và tỉ số phần trăm',
    'Biết cách giải 3 bài toán cơ bản về tỉ số phần trăm',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tỉ số của hai số',
      noi_dung: [
        'Tỉ số của hai số a và b (b ≠ 0) là thương của phép chia số a cho số b, kí hiệu là a/b hoặc a : b.',
      ],
    },
    {
      tieu_de: '2. Tỉ số phần trăm',
      noi_dung: [
        'Tỉ số phần trăm của hai số a và b là: (a.100)/b %.',
      ],
    },
    {
      tieu_de: '3. Các bài toán cơ bản',
      noi_dung: [
        'Bài toán 1: Tìm p% của số a: a × p/100.',
        'Bài toán 2: Tìm một số biết p% của nó bằng b: b : (p/100).',
      ],
    },
  ],
  cong_thuc: [
    'Tỉ số phần trăm = (a.100)/b %',
    'p% của a = a × p/100',
    'Số cần tìm = b : (p/100)',
  ],
  vi_du: [
    {
      de_bai: 'Tính tỉ số phần trăm của 15 và 40.',
      loi_giai: 'Tỉ số phần trăm là: (15 × 100) / 40 % = 37.5%.',
    },
    {
      de_bai: 'Tìm giá tiền một chiếc áo ban đầu là 200 000 đồng sau khi được giảm giá 15%.',
      loi_giai: 'Số tiền được giảm: 200 000 × 15% = 30 000 (đồng).\nGiá tiền sau giảm: 200 000 - 30 000 = 170 000 (đồng).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tìm một số biết 25% của số đó bằng 50.',
      dap_an: 'Số cần tìm: 50 : 25% = 50 : 0.25 = 200.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm học sinh nữ so với cả lớp là:',
      dap_an: ['40%', '60%', '24%', '50%'],
      dap_an_dung: 1,
      giai_thich: 'Ta tính (24 × 100) / 40 % = 60%.',
    },
  ],
  ghi_nho: [
    'Tỉ số phần trăm dùng kí hiệu %.',
    'Ứng dụng rất nhiều trong tính toán lãi suất, giảm giá sản phẩm, thống kê.',
  ],
};

// ============================================================
// CHƯƠNG VIII: HÌNH HỌC CƠ BẢN (Bài 32 - Bài 37)
// ============================================================

const BAI_32_DIEM_DUONG_THANG: LessonGuide = {
  bai_id: 'KN_G6_C8_B32',
  chuong: 8,
  so_tiet: 3,
  tieu_de: 'Bài 32: Điểm và đường thẳng',
  muc_tieu: [
    'Nhận biết khái niệm điểm thuộc đường thẳng, điểm không thuộc đường thẳng',
    'Nhận biết ba điểm thẳng hàng, điểm nằm giữa hai điểm',
    'Hiểu tính chất có một và chỉ một đường thẳng đi qua hai điểm phân biệt',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Điểm thuộc đường thẳng',
      noi_dung: [
        'Dùng chữ cái in hoa (A, B, C...) để đặt tên cho điểm; chữ cái thường (a, b, c...) để đặt tên đường thẳng.',
        'A ∈ d: Điểm A thuộc đường thẳng d (đường thẳng d đi qua điểm A).',
        'B ∉ d: Điểm B không thuộc đường thẳng d (đường thẳng d không đi qua điểm B).',
      ],
    },
    {
      tieu_de: '2. Ba điểm thẳng hàng',
      noi_dung: [
        'Khi ba điểm cùng thuộc một đường thẳng, ta nói chúng thẳng hàng.',
        'Trong ba điểm thẳng hàng, có một và chỉ một điểm nằm giữa hai điểm còn lại.',
      ],
    },
    {
      tieu_de: '3. Đường thẳng đi qua hai điểm',
      noi_dung: [
        'Có một và chỉ một đường thẳng đi qua hai điểm phân biệt cho trước.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho ba điểm A, B, C cùng nằm trên đường thẳng d sao cho điểm B nằm giữa A và C. Điểm nào nằm cùng phía với B đối với điểm A?',
      loi_giai: 'Điểm C nằm cùng phía với B đối với điểm A (cả hai đều ở phía bên phải điểm A).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Vẽ hai đường thẳng a, b cắt nhau tại điểm M. Lấy điểm P thuộc a nhưng không thuộc b.',
      dap_an: 'Vẽ hai nét cắt nhau dán nhãn M ở giao điểm. Dán nhãn a, b cho hai đường. Điểm P nằm trên đường a, bên ngoài giao điểm M.',
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
    'Kí hiệu ∈ biểu thị điểm thuộc đường thẳng.',
    'Giao điểm là điểm chung duy nhất của hai đường thẳng cắt nhau.',
  ],
};

const BAI_33_DIEM_NAM_GIUA_TIA: LessonGuide = {
  bai_id: 'KN_G6_C8_B33',
  chuong: 8,
  so_tiet: 3,
  tieu_de: 'Bài 33: Điểm nằm giữa hai điểm. Tia',
  muc_tieu: [
    'Nhận biết khái niệm điểm nằm giữa hai điểm',
    'Nhận biết khái niệm tia, gốc của tia, hai tia đối nhau, hai tia trùng nhau',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Tia',
      noi_dung: [
        'Hình gồm điểm O và một phần đường thẳng bị chia ra bởi điểm O gọi là một tia gốc O.',
        'Kí hiệu: tia Ox (O là gốc, viết trước).',
      ],
    },
    {
      tieu_de: '2. Hai tia đối nhau',
      noi_dung: [
        'Hai tia chung gốc tạo thành một đường thẳng gọi là hai tia đối nhau.',
        'Ví dụ: tia Ox và Oy đối nhau nếu O nằm giữa x và y.',
      ],
    },
    {
      tieu_de: '3. Hai tia trùng nhau',
      noi_dung: [
        'Nếu điểm M thuộc tia Ox (M khác O) thì tia OM và Ox trùng nhau.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho đường thẳng xy, lấy điểm O trên xy. Chỉ ra các tia đối nhau gốc O.',
      loi_giai: 'Các tia đối nhau gốc O là tia Ox và tia Oy.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Cho tia Ax. Lấy điểm B thuộc tia Ax. Điểm nào nằm giữa hai điểm còn lại?',
      dap_an: 'Điểm B nằm trên tia Ax nghĩa là B nằm cùng phía với x đối với A. Do đó điểm B nằm giữa A và x (hoặc trên đoạn AB thì B nằm giữa A và các điểm phía sau). Đúng hơn là A là gốc, B nằm giữa A và bất kỳ điểm nào nằm xa hơn B trên tia Ax.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Hai tia đối nhau có đặc điểm nào sau đây?',
      dap_an: ['Chung gốc', 'Tạo thành một đường thẳng', 'Chung gốc và tạo thành một đường thẳng', 'Song song với nhau'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Khi viết tên một tia, gốc của tia phải được viết trước.',
    'Hai tia đối nhau bắt buộc phải chung gốc và cùng nằm trên một đường thẳng thẳng hàng.',
  ],
};

const BAI_34_DOAN_THANG: LessonGuide = {
  bai_id: 'KN_G6_C8_B34',
  chuong: 8,
  so_tiet: 3,
  tieu_de: 'Bài 34: Đoạn thẳng. Độ dài đoạn thẳng',
  muc_tieu: [
    'Nhận biết khái niệm đoạn thẳng',
    'Biết cách đo độ dài đoạn thẳng bằng thước đo có chia vạch',
    'So sánh được hai đoạn thẳng dựa vào độ dài',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Đoạn thẳng',
      noi_dung: [
        'Đoạn thẳng AB là hình gồm điểm A, điểm B và tất cả các điểm nằm giữa A và B.',
        'A, B gọi là hai đầu mút (hoặc đầu) của đoạn thẳng.',
      ],
    },
    {
      tieu_de: '2. Độ dài đoạn thẳng',
      noi_dung: [
        'Mỗi đoạn thẳng có một độ dài. Độ dài đoạn thẳng là một số dương.',
        'Độ dài đoạn thẳng AB còn gọi là khoảng cách giữa hai điểm A và B.',
        'Nếu hai điểm trùng nhau thì khoảng cách giữa chúng bằng 0.',
      ],
    },
    {
      tieu_de: '3. So sánh hai đoạn thẳng',
      noi_dung: [
        'Hai đoạn thẳng bằng nhau nếu chúng có cùng độ dài: AB = CD.',
        'Đoạn thẳng AB lớn hơn đoạn thẳng CD nếu độ dài AB lớn hơn độ dài CD: AB > CD.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Cho AB = 5cm, CD = 5cm, EG = 4cm. So sánh các đoạn thẳng.',
      loi_giai: 'Ta có AB = CD (cùng bằng 5cm).\nAB > EG (vì 5cm > 4cm).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Cho điểm M nằm giữa A và B. Biết AM = 3cm, MB = 4cm. Tính độ dài AB.',
      dap_an: 'Vì M nằm giữa A và B nên AB = AM + MB = 3 + 4 = 7 (cm).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Nếu điểm M nằm giữa hai điểm A và B thì khẳng định nào sau đây luôn đúng?',
      dap_an: ['AM = MB', 'AB = AM + MB', 'AM > MB', 'AB = AM - MB'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'M nằm giữa A và B ⇔ AM + MB = AB.',
    'Độ dài đoạn thẳng luôn luôn là một số dương.',
  ],
};

const BAI_35_TRUNG_DIEM_DOAN_THANG: LessonGuide = {
  bai_id: 'KN_G6_C8_B35',
  chuong: 8,
  so_tiet: 3,
  tieu_de: 'Bài 35: Trung điểm của đoạn thẳng',
  muc_tieu: [
    'Hiểu định nghĩa trung điểm của đoạn thẳng',
    'Biết cách xác định trung điểm bằng thước đo độ dài hoặc bằng cách gấp giấy',
  ],
  kien_thuc: [
    {
      tieu_de: 'Trung điểm của đoạn thẳng',
      noi_dung: [
        'Trung điểm M của đoạn thẳng AB là điểm nằm giữa hai điểm A, B và cách đều hai điểm đó (AM = MB).',
        'Khi đó: AM = MB = AB/2.',
        'Trung điểm của đoạn thẳng còn gọi là điểm chính giữa của đoạn thẳng đó.',
      ],
    },
  ],
  cong_thuc: [
    'M là trung điểm AB ⇔ M nằm giữa A, B và AM = MB',
    'AM = MB = AB / 2',
  ],
  vi_du: [
    {
      de_bai: 'Cho đoạn thẳng AB = 8cm. Nếu M là trung điểm của AB thì độ dài đoạn AM là bao nhiêu?',
      loi_giai: 'Vì M là trung điểm của AB nên AM = AB/2 = 8/2 = 4 (cm).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Vẽ đoạn thẳng CD = 6cm. Nêu cách xác định trung điểm I của CD.',
      dap_an: 'Dùng thước đo đặt vạch 0 trùng C. Đánh dấu điểm I trùng với vạch 3cm trên thước. Điểm I chính là trung điểm của CD.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Điểm I là trung điểm của đoạn thẳng AB khi:',
      dap_an: ['IA = IB', 'I nằm giữa A và B', 'I nằm giữa A, B và IA = IB', 'IA + IB = AB'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Trung điểm phải thỏa mãn đồng thời hai điều kiện: NẰM GIỮA và CÁCH ĐỀU.',
  ],
};

const BAI_36_GOC: LessonGuide = {
  bai_id: 'KN_G6_C8_B36',
  chuong: 8,
  so_tiet: 2,
  tieu_de: 'Bài 36: Góc',
  muc_tieu: [
    'Hiểu khái niệm góc, đỉnh của góc, cạnh của góc',
    'Nhận biết góc bẹt',
    'Biết cách gọi tên góc và kí hiệu góc',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Góc là gì?',
      noi_dung: [
        'Góc là hình gồm hai tia chung gốc.',
        'Gốc chung gọi là đỉnh của góc, hai tia gọi là hai cạnh của góc.',
        'Kí hiệu góc xOy là ∠xOy hoặc xÔy.',
      ],
    },
    {
      tieu_de: '2. Góc bẹt',
      noi_dung: [
        'Góc bẹt là góc có hai cạnh là hai tia đối nhau.',
      ],
    },
    {
      tieu_de: '3. Điểm trong của góc',
      noi_dung: [
        'Một góc xOy (khác góc bẹt) chia mặt phẳng làm hai phần, phần chứa các điểm nằm giữa hai tia Ox, Oy gọi là miền trong (điểm trong) của góc.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Góc xOy có đỉnh và cạnh là gì?',
      loi_giai: 'Đỉnh là O, hai cạnh là tia Ox và tia Oy.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Vẽ góc xOy. Vẽ một điểm M nằm trong góc đó.',
      dap_an: 'Vẽ hai tia Ox và Oy chung gốc O. Chọn điểm M bất kì nằm ở vùng không gian giữa hai tia Ox và Oy.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Góc bẹt là góc:',
      dap_an: ['Có hai cạnh song song', 'Có hai cạnh trùng nhau', 'Có hai cạnh đối nhau', 'Có hai cạnh vuông góc'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Góc bẹt có số đo bằng hai lần góc vuông.',
    'Để phân biệt góc này với góc khác người ta thường đánh số ở đỉnh, ví dụ: Ô₁, Ô₂.',
  ],
};

const BAI_37_SO_DO_GOC: LessonGuide = {
  bai_id: 'KN_G6_C8_B37',
  chuong: 8,
  so_tiet: 3,
  tieu_de: 'Bài 37: Số đo góc',
  muc_tieu: [
    'Biết cách đo góc bằng thước đo góc',
    'Nhận biết các loại góc: góc vuông, góc nhọn, góc tù, góc bẹt',
    'So sánh được hai góc dựa vào số đo',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Đo góc',
      noi_dung: [
        'Mỗi góc có một số đo. Số đo của góc bẹt là 180°.',
        'Số đo của mỗi góc không vượt quá 180°.',
      ],
    },
    {
      tieu_de: '2. Các loại góc',
      noi_dung: [
        'Góc vuông: số đo bằng 90°.',
        'Góc nhọn: số đo lớn hơn 0° và nhỏ hơn 90°.',
        'Góc tù: số đo lớn hơn 90° và nhỏ hơn 180°.',
        'Góc bẹt: số đo bằng 180°.',
      ],
    },
    {
      tieu_de: '3. So sánh hai góc',
      noi_dung: [
        'Hai góc bằng nhau nếu số đo của chúng bằng nhau.',
        'Trong hai góc không bằng nhau, góc nào có số đo lớn hơn thì lớn hơn.',
      ],
    },
  ],
  cong_thuc: [
    'Góc vuông = 90°',
    '0° < Góc nhọn < 90°',
    '90° < Góc tù < 180°',
    'Góc bẹt = 180°',
  ],
  vi_du: [
    {
      de_bai: 'Cho ∠A = 60°, ∠B = 90°, ∠C = 120°. Hãy phân loại các góc.',
      loi_giai: '∠A là góc nhọn (vì 0° < 60° < 90°).\n∠B là góc vuông (vì = 90°).\n∠C là góc tù (vì 90° < 120° < 180°).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'So sánh góc 75° và góc 85°.',
      dap_an: 'Góc 75° < góc 85° vì 75° < 85°.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Góc nhọn là góc có số đo:',
      dap_an: ['Bằng 90°', 'Lớn hơn 90°', 'Lớn hơn 0° và nhỏ hơn 90°', 'Bằng 180°'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Sử dụng kí hiệu ° (độ) để ghi số đo góc.',
    'Thước đo góc (thước đo bán nguyệt) có hai vòng chia độ chạy ngược chiều nhau.',
  ],
};

// ============================================================
// CHƯƠNG IX: DỮ LIỆU & XÁC SUẤT (Bài 38 - Bài 43)
// ============================================================

const BAI_38_DU_LIEU_THU_THAP: LessonGuide = {
  bai_id: 'KN_G6_C9_B38',
  chuong: 9,
  so_tiet: 3,
  tieu_de: 'Bài 38: Dữ liệu và thu thập dữ liệu',
  muc_tieu: [
    'Nhận biết khái niệm dữ liệu và dữ liệu số (số liệu)',
    'Biết cách thu thập dữ liệu bằng nhiều cách (quan sát, phỏng vấn, làm thí nghiệm...)',
    'Nhận biết tính hợp lí của dữ liệu',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Dữ liệu là gì?',
      noi_dung: [
        'Các thông tin thu nhận được (chữ, số, hình ảnh, âm thanh...) gọi là dữ liệu.',
        'Dữ liệu là số gọi là số liệu.',
      ],
    },
    {
      tieu_de: '2. Thu thập dữ liệu',
      noi_dung: [
        'Có thể thu thập dữ liệu từ các nguồn có sẵn (sách báo, internet) hoặc thu thập trực tiếp (lập bảng hỏi, quan sát, phỏng vấn).',
      ],
    },
    {
      tieu_de: '3. Tính hợp lí của dữ liệu',
      noi_dung: [
        'Dữ liệu phải đảm bảo tính logic và phù hợp thực tế. Số liệu thu thập không thể vượt quá các giới hạn thực tế (ví dụ: điểm thi không thể > 10).',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Trong các dữ liệu sau, đâu là dữ liệu số (số liệu)?\na) Tên các loài hoa: Hồng, Lan, Cúc.\nb) Chiều cao học sinh lớp 6 (cm): 145, 150, 148.',
      loi_giai: 'Dữ liệu b) là dữ liệu số vì chứa các số đo chiều cao cụ thể.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Dữ liệu về nhiệt độ cơ thể người (độ C) sau đây có hợp lí không: 36.5, 37.2, 45.0, 36.8?',
      dap_an: 'Số liệu 45.0 độ C không hợp lí vì nhiệt độ cơ thể người bình thường sống không thể đạt tới mức này.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Dữ liệu nào sau đây là số liệu?',
      dap_an: ['Màu sắc yêu thích', 'Nơi sinh học sinh', 'Số điện thoại', 'Điểm thi môn Toán'],
      dap_an_dung: 3,
      giai_thich: 'Điểm thi môn Toán là số liệu định lượng có thể tính toán trung bình được. Số điện thoại chỉ là dãy số định danh.',
    },
  ],
  ghi_nho: [
    'Dữ liệu số (số liệu) có thể so sánh và thực hiện phép tính cộng trừ nhân chia.',
    'Kiểm tra tính hợp lí của dữ liệu giúp loại bỏ sai số thô khi thu thập.',
  ],
};

const BAI_39_BANG_THONG_KE_BIEU_DO_TRANH: LessonGuide = {
  bai_id: 'KN_G6_C9_B39',
  chuong: 9,
  so_tiet: 3,
  tieu_de: 'Bài 39: Bảng thống kê và biểu đồ tranh',
  muc_tieu: [
    'Biết cách đọc và lập bảng thống kê đơn giản',
    'Biết cách đọc và vẽ biểu đồ tranh để biểu diễn dữ liệu',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Bảng thống kê',
      noi_dung: [
        'Là bảng trình bày dữ liệu một cách hệ thống gồm các hàng và các cột, giúp người đọc dễ so sánh, đối chiếu.',
      ],
    },
    {
      tieu_de: '2. Biểu đồ tranh',
      noi_dung: [
        'Sử dụng các biểu tượng hoặc hình ảnh để thể hiện số lượng của các đối tượng.',
        'Mỗi biểu tượng/hình ảnh đại diện cho một số lượng đơn vị nhất định.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Trong biểu đồ tranh, nếu quy ước 1 hình tròn ⬤ đại diện cho 5 quyển sách. Hỏi 4 hình tròn ⬤ và một nửa hình tròn đại diện cho bao nhiêu quyển sách?',
      loi_giai: '4 hình tròn đại diện cho: 4 × 5 = 20 (quyển).\nMột nửa hình tròn đại diện cho: 5 : 2 = 2.5 (quyển) (hoặc thường quy ước tròn lẻ là 2 hoặc 3 tùy đề bài, nếu quy ước nửa hình tròn là 2 quyển thì tổng là 22 quyển). Nếu quy ước nửa hình tròn = 2.5 quyển thì tổng là 22.5. Thông thường quy ước nửa biểu tượng sẽ bằng một nửa số lượng của biểu tượng đầy đủ.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Lập bảng thống kê số lượng điểm 10 của tổ 1 dựa vào biểu đồ tranh có: An (3 biểu tượng hoa), Bình (2 biểu tượng hoa), Chi (4 biểu tượng hoa). Biết mỗi biểu tượng đại diện cho 2 điểm 10.',
      dap_an: 'Số điểm 10: An: 6, Bình: 4, Chi: 8.\nBảng thống kê:\n- Học sinh: An | Bình | Chi\n- Số điểm 10: 6 | 4 | 8.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Ưu điểm lớn nhất của biểu đồ tranh là:',
      dap_an: ['Trình bày được rất nhiều số liệu phức tạp', 'Sinh động, dễ hiểu, thu hút sự chú ý', 'Dễ vẽ hơn bảng thống kê', 'Chính xác tuyệt đối trong mọi trường hợp'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Khi đọc biểu đồ tranh, cần chú ý phần chú thích giá trị của mỗi biểu tượng.',
  ],
};

const BAI_40_BIEU_DO_COT: LessonGuide = {
  bai_id: 'KN_G6_C9_B40',
  chuong: 9,
  so_tiet: 3,
  tieu_de: 'Bài 40: Biểu đồ cột',
  muc_tieu: [
    'Biết cách đọc thông tin từ biểu đồ cột',
    'Biết cách vẽ biểu đồ cột từ bảng số liệu cho trước',
    'Nhận ra xu thế và phân tích số liệu trên biểu đồ cột',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Cấu tạo biểu đồ cột',
      noi_dung: [
        'Trục ngang: biểu diễn danh mục đối tượng.',
        'Trục đứng: biểu diễn tiêu chí đo lường (số lượng, tỉ lệ...) với các vạch chia đều nhau.',
        'Các cột hình chữ nhật có chiều rộng bằng nhau, chiều cao tương ứng với giá trị số liệu của đối tượng đó.',
      ],
    },
    {
      tieu_de: '2. Đọc và vẽ biểu đồ cột',
      noi_dung: [
        'Đọc: gióng đỉnh cột sang trục đứng để đọc số liệu.',
        'Vẽ: xác định chia vạch phù hợp trên trục đứng, vẽ các cột có chiều cao tương ứng số liệu.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Một biểu đồ cột biểu diễn số học sinh giỏi các lớp 6: 6A (15 em), 6B (20 em), 6C (18 em). Lớp nào có nhiều học sinh giỏi nhất và chiều cao cột của lớp đó tương ứng bao nhiêu vạch chia nếu mỗi vạch là 5 em?',
      loi_giai: 'Lớp 6B có nhiều học sinh giỏi nhất (20 em).\nChiều cao cột lớp 6B tương ứng: 20 : 5 = 4 vạch chia.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Nêu các bước vẽ biểu đồ cột biểu diễn lượng mưa các tháng.',
      dap_an: '1. Vẽ trục ngang và dọc vuông góc. Trục ngang ghi các tháng, trục dọc ghi lượng mưa (mm).\n2. Chia vạch trên trục dọc.\n3. Vẽ các cột hình chữ nhật ứng với lượng mưa mỗi tháng.\n4. Ghi tiêu đề biểu đồ và tên các trục.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Chiều cao của cột trong biểu đồ cột thể hiện điều gì?',
      dap_an: ['Tên đối tượng', 'Số lượng đối tượng tương ứng', 'Độ rộng của cột', 'Số thứ tự của đối tượng'],
      dap_an_dung: 1,
    },
  ],
  ghi_nho: [
    'Khoảng cách giữa các cột trên biểu đồ nên vẽ cách đều nhau.',
    'Ghi số liệu cụ thể ở đầu mỗi cột để người đọc dễ theo dõi.',
  ],
};

const BAI_41_BIEU_DO_COT_KEP: LessonGuide = {
  bai_id: 'KN_G6_C9_B41',
  chuong: 9,
  so_tiet: 3,
  tieu_de: 'Bài 41: Biểu đồ cột kép',
  muc_tieu: [
    'Nhận biết được ý nghĩa của biểu đồ cột kép (so sánh hai nhóm dữ liệu của cùng đối tượng)',
    'Đọc và phân tích được thông tin từ biểu đồ cột kép',
    'Biết cách vẽ biểu đồ cột kép cơ bản',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Biểu đồ cột kép là gì?',
      noi_dung: [
        'Dùng để so sánh hai bộ dữ liệu cùng loại của các đối tượng.',
        'Tại mỗi đối tượng trên trục ngang, ta vẽ hai cột liền nhau, mỗi cột thể hiện một bộ dữ liệu khác nhau.',
        'Cần có chú giải màu sắc/họa tiết để phân biệt hai cột.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Biểu đồ cột kép biểu diễn số học sinh nam và nữ của 3 lớp 6. Lớp 6A có cột nam màu xanh cao 15 đơn vị, cột nữ màu đỏ cao 18 đơn vị. Tính tổng số học sinh lớp 6A.',
      loi_giai: 'Tổng số học sinh lớp 6A là: 15 (nam) + 18 (nữ) = 33 (học sinh).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Nêu sự khác nhau giữa biểu đồ cột đơn và biểu đồ cột kép.',
      dap_an: 'Biểu đồ cột đơn chỉ biểu diễn 1 chỉ tiêu của đối tượng. Biểu đồ cột kép biểu diễn đồng thời 2 chỉ tiêu kề nhau giúp so sánh trực quan sự khác biệt.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khi vẽ biểu đồ cột kép, bắt buộc phải có phần nào sau đây để phân biệt các cột?',
      dap_an: ['Tên biểu đồ', 'Trục hoành', 'Bảng chú giải (chú thích màu sắc)', 'Trục tung'],
      dap_an_dung: 2,
    },
  ],
  ghi_nho: [
    'Các cột cạnh nhau trong nhóm phải sát nhau và phân biệt rõ bằng màu sắc.',
  ],
};

const BAI_42_KET_QUA_CO_THE_SU_KIEN: LessonGuide = {
  bai_id: 'KN_G6_C9_B42',
  chuong: 9,
  so_tiet: 2,
  tieu_de: 'Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm',
  muc_tieu: [
    'Liệt kê được tất cả các kết quả có thể xảy ra của một trò chơi hoặc thí nghiệm đơn giản',
    'Nhận biết được sự kiện có xảy ra hay không xảy ra đối với kết quả thu được',
  ],
  kien_thuc: [
    {
      tieu_de: '1. Kết quả có thể',
      noi_dung: [
        'Khi thực hiện một phép thử (như gieo xúc xắc, tung đồng xu), ta không thể biết trước kết quả nhưng có thể liệt kê tất cả các kết quả có thể xảy ra.',
      ],
    },
    {
      tieu_de: '2. Sự kiện',
      noi_dung: [
        'Một sự kiện là một phát biểu/khẳng định về kết quả của phép thử.',
        'Sự kiện xảy ra nếu kết quả thực tế thỏa mãn khẳng định đó. Ngược lại sự kiện không xảy ra.',
      ],
    },
  ],
  vi_du: [
    {
      de_bai: 'Gieo một con xúc xắc 6 mặt. Liệt kê các kết quả có thể. Xét xem sự kiện "Số chấm xuất hiện là số nguyên tố" xảy ra khi nào.',
      loi_giai: '- Các kết quả có thể: xuất hiện mặt 1, 2, 3, 4, 5, hoặc 6 chấm.\n- Sự kiện xảy ra khi gieo được mặt 2, 3 hoặc 5 chấm.',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Tung một đồng xu 2 lần. Liệt kê tất cả các kết quả có thể xảy ra về mặt ngửa (N) và sấp (S).',
      dap_an: 'Các kết quả có thể: {NN, NS, SN, SS}.',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Khi quay một vòng quay có 4 phần màu đỏ, xanh, vàng, tím bằng nhau. Sự kiện nào sau đây KHÔNG THỂ xảy ra?',
      dap_an: ['Mũi tên chỉ vào màu đỏ', 'Mũi tên chỉ vào màu vàng', 'Mũi tên chỉ vào màu trắng', 'Mũi tên chỉ vào màu xanh'],
      dap_an_dung: 2,
      giai_thich: 'Vòng quay không có màu trắng nên mũi tên không thể chỉ vào màu trắng.',
    },
  ],
  ghi_nho: [
    'Liệt kê đầy đủ các kết quả giúp ta tính toán chính xác xác suất ở bài học sau.',
  ],
};

const BAI_43_XAC_SUAT_THUC_NGHIEM: LessonGuide = {
  bai_id: 'KN_G6_C9_B43',
  chuong: 9,
  so_tiet: 3,
  tieu_de: 'Bài 43: Xác suất thực nghiệm',
  muc_tieu: [
    'Hiểu khái niệm xác suất thực nghiệm',
    'Biết cách tính xác suất thực nghiệm của một sự kiện trong trò chơi gieo xúc xắc, tung đồng xu hoặc chọn vật từ hộp',
  ],
  kien_thuc: [
    {
      tieu_de: 'Xác suất thực nghiệm của sự kiện',
      noi_dung: [
        'Được tính bằng tỉ số giữa số lần sự kiện đó xảy ra và tổng số lần thực hiện thực nghiệm.',
        'Công thức: P = (Số lần xảy ra sự kiện) / (Tổng số lần thực hiện thực nghiệm).',
      ],
    },
  ],
  cong_thuc: [
    'P = k / n (k: số lần sự kiện xảy ra, n: tổng số lần thử)',
  ],
  vi_du: [
    {
      de_bai: 'Tung đồng xu 20 lần, thấy có 12 lần xuất hiện mặt ngửa. Tính xác suất thực nghiệm của sự kiện "Đồng xu xuất hiện mặt ngửa".',
      loi_giai: 'Xác suất thực nghiệm là: 12 / 20 = 3/5 = 0.6 (hay 60%).',
    },
  ],
  luyen_tap: [
    {
      de_bai: 'Gieo xúc xắc 50 lần, mặt 6 chấm xuất hiện 8 lần. Tính xác suất thực nghiệm của sự kiện xuất hiện mặt 6 chấm.',
      dap_an: 'Xác suất thực nghiệm là: 8 / 50 = 4/25 = 0.16 (hay 16%).',
    },
  ],
  cau_hoi_on_tap: [
    {
      cau_hoi: 'Xác suất thực nghiệm của sự kiện luôn nằm trong đoạn nào?',
      dap_an: ['Từ 0 đến 1 (tức là từ 0% đến 100%)', 'Lớn hơn 1', 'Nhỏ hơn 0', 'Từ -1 đến 1'],
      dap_an_dung: 0,
    },
  ],
  ghi_nho: [
    'Xác suất thực nghiệm có thể thay đổi sau mỗi lượt thực nghiệm khác nhau.',
    'Khi số lần thực nghiệm rất lớn, xác suất thực nghiệm sẽ tiệm cận gần với xác suất lý thuyết.',
  ],
};

// ============================================================
// EXPORT
// ============================================================

export const KET_NOI_TOAN_6_HK2_GUIDES: LessonGuide[] = [
  BAI_23_MO_RONG_PHAN_SO, BAI_24_SO_SANH_PHAN_SO, BAI_25_CONG_TRU_PHAN_SO,
  BAI_26_NHAN_CHIA_PHAN_SO, BAI_27_HAI_BAI_TOAN_PHAN_SO,
  BAI_28_SO_THAP_PHAN, BAI_29_TINH_TOAN_SO_THAP_PHAN, BAI_30_LAM_TRON_UOC_LUONG,
  BAI_31_TI_SO_PHAN_TRAM,
  BAI_32_DIEM_DUONG_THANG, BAI_33_DIEM_NAM_GIUA_TIA, BAI_34_DOAN_THANG,
  BAI_35_TRUNG_DIEM_DOAN_THANG, BAI_36_GOC, BAI_37_SO_DO_GOC,
  BAI_38_DU_LIEU_THU_THAP, BAI_39_BANG_THONG_KE_BIEU_DO_TRANH, BAI_40_BIEU_DO_COT,
  BAI_41_BIEU_DO_COT_KEP, BAI_42_KET_QUA_CO_THE_SU_KIEN, BAI_43_XAC_SUAT_THUC_NGHIEM,
];

// Timeline name → Guide mapping
export const TIMELINE_TO_GUIDE_MAP_KNTT_HK2: Record<string, string> = {};
KET_NOI_TOAN_6_HK2_GUIDES.forEach(guide => {
  TIMELINE_TO_GUIDE_MAP_KNTT_HK2[guide.tieu_de] = guide.bai_id;
});

export function getLessonGuideByTimelineNameKNTTHK2(tenBai: string): LessonGuide | undefined {
  for (const guide of KET_NOI_TOAN_6_HK2_GUIDES) {
    const baiNumber = guide.tieu_de.match(/Bài (\d+)/)?.[1];
    if (baiNumber && tenBai.includes(`Bài ${baiNumber}:`)) {
      return guide;
    }
  }
  return undefined;
}
