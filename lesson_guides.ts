export interface LessonGuide {
  bai_id: string; // use IDs like KN_G6_C1_B1, etc.
  chuong: number;
  so_tiet: number;
  tieu_de: string;
  muc_tieu: string[];
  kien_thuc: { tieu_de: string; noi_dung: string[] }[];
  cong_thuc?: string[];
  vi_du: { de_bai: string; loi_giai: string }[];
  luyen_tap: { de_bai: string; dap_an: string }[];
  cau_hoi_on_tap?: { cau_hoi: string; dap_an: string[]; dap_an_dung: number; giai_thich?: string }[];
  ghi_nho: string[];
}

export const lessonGuides: LessonGuide[] = [
  {
    bai_id: "KN_G6_C1_B1",
    chuong: 1,
    so_tiet: 1,
    tieu_de: "§1: Tập hợp",
    muc_tieu: [
      "Nhận biết một tập hợp và các phần tử của nó.",
      "Nhận biết tập hợp các số tự nhiên ℕ và tập hợp các số tự nhiên khác 0 ℕ*.",
      "Sử dụng thành thạo các kí hiệu về tập hợp: ∈ (thuộc) và ∉ (không thuộc).",
      "Hiểu và trình bày được hai cách mô tả (cách viết) một tập hợp."
    ],
    kien_thuc: [
      {
        tieu_de: "Tập hợp và phần tử của tập hợp",
        noi_dung: [
          "Một tập hợp (gọi tắt là tập) bao gồm những đối tượng nhất định. Các đối tượng ấy được gọi là những phần tử của tập hợp.",
          "Nếu x là một phần tử của tập hợp A, ta kí hiệu x ∈ A (đọc là x thuộc A).",
          "Nếu y không là phần tử của tập hợp A, ta kí hiệu y ∉ A (đọc là y không thuộc A)."
        ]
      },
      {
        tieu_de: "Mô tả một tập hợp",
        noi_dung: [
          "Có hai cách mô tả một tập hợp:",
          "Cách 1: Liệt kê các phần tử của tập hợp: các phần tử được viết trong dấu ngoặc nhọn { } theo thứ tự tùy ý nhưng mỗi phần tử chỉ được viết một lần, ngăn cách nhau bởi dấu chấm phẩy ';'.",
          "Cách 2: Nêu dấu hiệu đặc trưng cho các phần tử của tập hợp.",
          "Tập hợp các số tự nhiên được kí hiệu là ℕ: ℕ = {0; 1; 2; 3; ...}.",
          "Tập hợp các số tự nhiên khác 0 được kí hiệu là ℕ*: ℕ* = {1; 2; 3; ...}."
        ]
      }
    ],
    cong_thuc: [
      "x ∈ A",
      "y ∉ A",
      "ℕ = {0; 1; 2; 3; ...}",
      "ℕ* = {1; 2; 3; ...}"
    ],
    vi_du: [
      {
        de_bai: "Mô tả tập hợp P gồm các số tự nhiên nhỏ hơn 6 bằng hai cách.",
        loi_giai: "Cách 1: Liệt kê các phần tử của tập hợp:\nP = {0; 1; 2; 3; 4; 5}\nCách 2: Nêu dấu hiệu đặc trưng cho các phần tử:\nP = {n ∈ ℕ | n < 6}"
      }
    ],
    luyen_tap: [
      {
        de_bai: "Gọi B là tập hợp các bạn tổ trưởng trong lớp em. Hãy chỉ ra một bạn thuộc tập B và một bạn không thuộc tập B.",
        dap_an: "Giả sử bạn Nam là tổ trưởng và bạn Hoa không là tổ trưởng. Ta có: Nam ∈ B; Hoa ∉ B."
      },
      {
        de_bai: "Viết tập hợp A các số tự nhiên nhỏ hơn 5 và tập hợp B các số tự nhiên khác 0 nhỏ hơn 5 bằng cách liệt kê phần tử.",
        dap_an: "A = {0; 1; 2; 3; 4}\nB = {1; 2; 3; 4}"
      },
      {
        de_bai: "Cho M = {7; 8; 9; 10}. Thay dấu ? bằng kí hiệu ∈ hoặc ∉: a) 5 ? M; b) 9 ? M.",
        dap_an: "a) 5 ∉ M\nb) 9 ∈ M"
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Cách viết tập hợp nào sau đây là đúng?",
        dap_an: [
          "A = [1; 2; 3; 4]",
          "A = (1; 2; 3; 4)",
          "A = 1; 2; 3; 4",
          "A = {1; 2; 3; 4}"
        ],
        dap_an_dung: 3,
        giai_thich: "Các phần tử của tập hợp được đặt trong dấu ngoặc nhọn { } và ngăn cách bởi dấu chấm phẩy."
      },
      {
        cau_hoi: "Cho B = {2; 3; 4; 5}. Chọn đáp án sai trong các đáp án sau:",
        dap_an: [
          "2 ∈ B",
          "5 ∈ B",
          "1 ∉ B",
          "6 ∈ B"
        ],
        dap_an_dung: 3,
        giai_thich: "Số 6 không nằm trong tập hợp B nên viết 6 ∈ B là sai."
      },
      {
        cau_hoi: "Viết tập hợp A các số tự nhiên lớn hơn 5 và nhỏ hơn 10.",
        dap_an: [
          "A = {6; 7; 8; 9}",
          "A = {5; 6; 7; 8; 9}",
          "A = {6; 7; 8; 9; 10}",
          "A = {6; 7; 8}"
        ],
        dap_an_dung: 0,
        giai_thich: "Các số tự nhiên lớn hơn 5 và nhỏ hơn 10 là 6, 7, 8, 9."
      },
      {
        cau_hoi: "Viết tập hợp P các chữ cái khác nhau trong cụm từ 'HOC SINH'.",
        dap_an: [
          "P = {H; O; C; S; I; N; H}",
          "P = {H; O; C; S; I; N}",
          "P = {H; C; S; I; N}",
          "P = {H; O; C; H; I; N}"
        ],
        dap_an_dung: 1,
        giai_thich: "Mỗi phần tử chỉ được liệt kê một lần. Chữ H xuất hiện hai lần nên chỉ viết một lần."
      },
      {
        cau_hoi: "Viết tập hợp A = {16; 17; 18; 19} dưới dạng chỉ ra tính chất đặc trưng.",
        dap_an: [
          "A = {x ∈ ℕ | 15 < x < 19}",
          "A = {x ∈ ℕ | 15 < x < 20}",
          "A = {x ∈ ℕ | 16 < x < 20}",
          "A = {x ∈ ℕ | 15 < x ≤ 20}"
        ],
        dap_an_dung: 1,
        giai_thich: "Các số tự nhiên lớn hơn 15 và nhỏ hơn 20 là 16, 17, 18, 19."
      }
    ],
    ghi_nho: [
      "Hiểu và ghi nhớ hai cách viết một tập hợp: liệt kê các phần tử hoặc nêu tính chất đặc trưng.",
      "Mỗi phần tử của tập hợp được viết một lần duy nhất."
    ]
  },
  {
    bai_id: "KN_G6_C1_B2",
    chuong: 1,
    so_tiet: 1,
    tieu_de: "§2: Cách ghi số tự nhiên",
    muc_tieu: [
      "Nhận biết được cách viết số tự nhiên trong hệ thập phân và mối quan hệ giữa các hàng.",
      "Nhận biết được giá trị mỗi chữ số theo vị trí trong một số tự nhiên.",
      "Đọc và viết được các số La Mã không quá 30."
    ],
    kien_thuc: [
      {
        tieu_de: "Hệ thập phân",
        noi_dung: [
          "Trong hệ thập phân, mỗi số tự nhiên được viết dưới dạng một dãy những chữ số lấy trong 10 chữ số: 0; 1; 2; 3; 4; 5; 6; 7; 8 và 9.",
          "Cứ 10 đơn vị ở một hàng thì bằng 1 đơn vị ở hàng liền trước nó. Chẳng hạn: 10 chục = 1 trăm; 10 trăm = 1 nghìn.",
          "Với các số tự nhiên khác 0, chữ số đầu tiên (từ trái sang phải) phải khác 0.",
          "Đối với số có 4 chữ số trở lên, ta viết tách riêng từng lớp. Mỗi lớp là một nhóm ba chữ số kể từ phải sang trái."
        ]
      },
      {
        tieu_de: "Giá trị các chữ số của một số tự nhiên",
        noi_dung: [
          "Mỗi chữ số tự nhiên viết trong hệ thập phân đều biểu diễn được thành tổng giá trị các chữ số theo vị trí của nó.",
          "Số ab (có gạch đầu) = a × 10 + b (với a ≠ 0).",
          "Số abc (có gạch đầu) = a × 100 + b × 10 + c (với a ≠ 0)."
        ]
      },
      {
        tieu_de: "Số La Mã",
        noi_dung: [
          "Hệ số La Mã dùng các ký hiệu chính: I = 1, V = 5, X = 10.",
          "Các số La Mã từ 1 đến 10 là: I, II, III, IV, V, VI, VII, VIII, IX, X.",
          "Các số La Mã từ 11 đến 20 được viết bằng cách thêm X vào bên trái các số từ 1 đến 10: XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX.",
          "Các số La Mã từ 21 đến 30 được viết bằng cách thêm XX vào bên trái các số từ 1 đến 10: XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX.",
          "Không có số La Mã nào biểu diễn số 0."
        ]
      }
    ],
    cong_thuc: [
      "ab = a × 10 + b (a ≠ 0)",
      "abc = a × 100 + b × 10 + c (a ≠ 0)"
    ],
    vi_du: [
      {
        de_bai: "Viết số 236 thành tổng giá trị các chữ số của nó.",
        loi_giai: "236 = 2 × 100 + 3 × 10 + 6"
      },
      {
        de_bai: "Đọc số La Mã XXIV và viết số 27 bằng số La Mã.",
        loi_giai: "- Số XXIV có ba thành phần là X, X và IV tương ứng với 10, 10 và 4 nên biểu diễn số 24.\n- Số 27 được biểu diễn là XXVII."
      }
    ],
    luyen_tap: [
      {
        de_bai: "Viết số 34 604 thành tổng giá trị các chữ số của nó.",
        dap_an: "34 604 = 3 × 10 000 + 4 × 1000 + 6 × 100 + 4"
      },
      {
        de_bai: "Đọc các số sau: 27 501; 106 712; 7 110 385; 2 915 404 267.",
        dap_an: "- 27 501: Hai mươi bảy nghìn năm trăm linh một.\n- 106 712: Một trăm linh sáu nghìn bảy trăm mười hai.\n- 7 110 385: Bảy triệu một trăm mười nghìn ba trăm tám mươi lăm.\n- 2 915 404 267: Hai tỉ chín trăm mười lăm triệu bốn trăm linh bốn nghìn hai trăm sáu mươi bảy."
      },
      {
        de_bai: "Viết các số 18, 25 bằng số La Mã.",
        dap_an: "18: XVIII; 25: XXV"
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Số La Mã nào sau đây biểu diễn số 29?",
        dap_an: [
          "XXIX",
          "XXIIV",
          "XIX",
          "XXX"
        ],
        dap_an_dung: 0,
        giai_thich: "XXIX gồm hai chữ số X (10 + 10 = 20) và IX (9) ghép lại thành 29."
      },
      {
        cau_hoi: "Chữ số 9 trong số 909 090 thuộc hàng nào?",
        dap_an: [
          "Hàng trăm nghìn, hàng nghìn, hàng chục",
          "Hàng chục, hàng nghìn, hàng trăm",
          "Hàng chục nghìn, hàng chục, hàng đơn vị",
          "Hàng trăm nghìn, hàng nghìn, hàng chục nghìn"
        ],
        dap_an_dung: 0,
        giai_thich: "Trong số 909 090, ba chữ số 9 nằm ở các vị trí hàng trăm nghìn, hàng nghìn và hàng chục."
      },
      {
        cau_hoi: "Tìm số tự nhiên có 3 chữ số biết chữ số hàng chục là 5, giá trị hàng chục là 50 và các chữ số khác là 0 và 3.",
        dap_an: [
          "350",
          "530",
          "305",
          "503"
        ],
        dap_an_dung: 0,
        giai_thich: "Chữ số 5 ở hàng chục (giá trị 50), chữ số 3 ở hàng trăm và chữ số 0 ở hàng đơn vị. Số đó là 350."
      }
    ],
    ghi_nho: [
      "Cách viết số tự nhiên trong hệ thập phân, mối quan hệ giữa các hàng.",
      "Cách biểu diễn và đọc các chữ số La Mã từ 1 đến 30."
    ]
  },
  {
    bai_id: "KN_G6_C1_B3",
    chuong: 1,
    so_tiet: 1,
    tieu_de: "§3: Thứ tự trong tập hợp các số tự nhiên",
    muc_tieu: [
      "Nhận biết được tia số.",
      "Nhận biết được thứ tự các số tự nhiên và mối liên hệ với các điểm biểu diễn chúng trên tia số.",
      "Biểu diễn được số tự nhiên trên tia số.",
      "So sánh được hai số tự nhiên."
    ],
    kien_thuc: [
      {
        tieu_de: "Thứ tự của các số tự nhiên",
        noi_dung: [
          "Tia số là hình ảnh trực quan giúp tìm hiểu về thứ tự của các số tự nhiên.",
          "Trong hai số tự nhiên khác nhau, luôn có một số nhỏ hơn số kia. Nếu số a nhỏ hơn số b thì trên tia số nằm ngang, điểm a nằm bên trái điểm b. Kí hiệu: a < b hoặc b > a.",
          "Mỗi số tự nhiên có đúng một số liền sau. Ví dụ: 9 là số liền sau của 8 (còn 8 là số liền trước của 9). Hai số 8 và 9 là hai số tự nhiên liên tiếp.",
          "Tính chất bắc cầu: Nếu a < b và b < c thì a < c. Ví dụ: Nếu a < 5 và 5 < 7 thì a < 7.",
          "Số 0 không có số tự nhiên liền trước và là số tự nhiên nhỏ nhất."
        ]
      },
      {
        tieu_de: "Các kí hiệu ≤ hoặc ≥",
        noi_dung: [
          "Kí hiệu a ≤ b đọc là 'a nhỏ hơn hoặc bằng b', có nghĩa là a < b hoặc a = b.",
          "Kí hiệu a ≥ b đọc là 'a lớn hơn hoặc bằng b', có nghĩa là a > b hoặc a = b.",
          "Tính chất bắc cầu: Nếu a ≤ b và b ≤ c thì a ≤ c."
        ]
      }
    ],
    cong_thuc: [
      "a < b và b < c ⇒ a < c",
      "a ≤ b và b ≤ c ⇒ a ≤ c"
    ],
    vi_du: [
      {
        de_bai: "Viết các tập hợp sau bằng cách liệt kê phần tử: a) A = {x ∈ ℕ | x < 4}; b) B = {x ∈ ℕ | x ≤ 4}.",
        loi_giai: "a) A = {0; 1; 2; 3}\nb) B = {0; 1; 2; 3; 4}"
      }
    ],
    luyen_tap: [
      {
        de_bai: "So sánh hai số m và n biết: m = 12 036 001 và n = 12 035 987. Trên tia số nằm ngang, điểm biểu diễn số nào nằm trước?",
        dap_an: "Có m > n. Do đó điểm n nằm trước điểm m trên tia số."
      },
      {
        de_bai: "Viết số liền trước và số liền sau của các số 3 532 và 3 529.",
        dap_an: "- Số liền trước của 3 532 là 3 531; số liền sau của 3 532 là 3 533.\n- Số liền trước của 3 529 là 3 528; số liền sau của 3 529 là 3 530."
      },
      {
        de_bai: "Viết tập hợp các số tự nhiên x sao cho 9 < x < 15.",
        dap_an: "M = {10; 11; 12; 13; 14}"
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Trong các khẳng định sau, khẳng định nào sai?",
        dap_an: [
          "Số 0 là số tự nhiên nhỏ nhất",
          "Mọi số tự nhiên đều có số liền trước",
          "Nếu a < b và b < c thì a < c",
          "Số liền sau của 99 là 100"
        ],
        dap_an_dung: 1,
        giai_thich: "Số 0 là số tự nhiên nhỏ nhất và không có số tự nhiên liền trước, nên khẳng định mọi số tự nhiên đều có số liền trước là sai."
      },
      {
        cau_hoi: "Cho tập hợp K = {x ∈ ℕ | x ≤ 3}. Tập hợp K viết dưới dạng liệt kê phần tử là:",
        dap_an: [
          "K = {1; 2; 3}",
          "K = {0; 1; 2}",
          "K = {0; 1; 2; 3}",
          "K = {0; 1; 2; 3; 4}"
        ],
        dap_an_dung: 2,
        giai_thich: "K gồm các số tự nhiên nhỏ hơn hoặc bằng 3, tức là {0; 1; 2; 3}."
      },
      {
        cau_hoi: "Sắp xếp chiều cao của ba bạn Cường (148 cm), An (150 cm), Bắc (153 cm) theo thứ tự từ thấp đến cao.",
        dap_an: [
          "Cường, An, Bắc",
          "An, Cường, Bắc",
          "Bắc, An, Cường",
          "Cường, Bắc, An"
        ],
        dap_an_dung: 0,
        giai_thich: "Vì 148 < 150 < 153 nên thứ tự từ thấp đến cao là Cường, An, Bắc."
      }
    ],
    ghi_nho: [
      "Số 0 không có số tự nhiên liền trước và là số tự nhiên nhỏ nhất.",
      "Trên tia số nằm ngang, số nhỏ hơn được biểu diễn bởi điểm nằm bên trái số lớn hơn."
    ]
  },
  {
    bai_id: "KN_G6_C1_B4",
    chuong: 1,
    so_tiet: 1,
    tieu_de: "§4: Phép cộng và phép trừ số tự nhiên",
    muc_tieu: [
      "Nhận biết được số hạng, tổng; số bị trừ, số trừ, hiệu.",
      "Nhận biết và vận dụng được tính chất giao hoán và tính chất kết hợp của phép cộng để tính nhẩm, tính hợp lí.",
      "Giải được một số bài toán có nội dung thực tiễn liên quan đến phép cộng, phép trừ."
    ],
    kien_thuc: [
      {
        tieu_de: "Phép cộng số tự nhiên",
        noi_dung: [
          "Phép cộng hai số tự nhiên a và b cho ta một số tự nhiên gọi là tổng của chúng: a + b (a, b là số hạng).",
          "Tính chất giao hoán: a + b = b + a.",
          "Tính chất kết hợp: (a + b) + c = a + (b + c).",
          "Cộng với số 0: a + 0 = 0 + a = a."
        ]
      },
      {
        tieu_de: "Phép trừ số tự nhiên",
        noi_dung: [
          "Với hai số tự nhiên a, b đã cho, nếu có số tự nhiên c sao cho a = b + c thì ta có phép trừ a - b = c (a là số bị trừ, b là số trừ, c là hiệu).",
          "Trong tập hợp số tự nhiên, phép trừ a - b chỉ thực hiện được nếu a ≥ b."
        ]
      }
    ],
    cong_thuc: [
      "a + b = b + a",
      "(a + b) + c = a + (b + c)",
      "a - b = c ⇔ a = b + c (a ≥ b)"
    ],
    vi_du: [
      {
        de_bai: "Tính tổng sau một cách hợp lí: 66 + 289 + 134 + 311.",
        loi_giai: "66 + 289 + 134 + 311\n= (66 + 134) + (289 + 311) (Giao hoán và kết hợp)\n= 200 + 600 = 800"
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 1: Tính một cách hợp lí: 117 + 68 + 23.",
        dap_an: "117 + 68 + 23 = (117 + 23) + 68 = 140 + 68 = 208."
      },
      {
        de_bai: "Luyện tập 2: Tính hiệu: 865 279 - 45 027.",
        dap_an: "865 279 - 45 027 = 820 252."
      },
      {
        de_bai: "Bài 1.22: Tính một cách hợp lí: a) 285 + 470 + 115 + 230; b) 571 + 216 + 129 + 124.",
        dap_an: "a) (285 + 115) + (470 + 230) = 400 + 700 = 1100\nb) (571 + 129) + (216 + 124) = 700 + 340 = 1040"
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Phép trừ nào sau đây không thực hiện được trong tập hợp số tự nhiên?",
        dap_an: [
          "100 - 99",
          "50 - 50",
          "34 693 - 129 107",
          "129 107 - 34 693"
        ],
        dap_an_dung: 2,
        giai_thich: "Vì 34 693 < 129 107 nên phép trừ 34 693 - 129 107 không thực hiện được trong tập số tự nhiên."
      },
      {
        cau_hoi: "Kết quả của phép tính 117 + 68 + 23 bằng:",
        dap_an: [
          "208",
          "198",
          "218",
          "188"
        ],
        dap_an_dung: 0,
        giai_thich: "(117 + 23) + 68 = 140 + 68 = 208."
      },
      {
        cau_hoi: "Mai mua cà tím hết 18 nghìn đồng, cà chua hết 21 nghìn đồng. Mai đưa tờ 100 nghìn đồng. Cô bán hàng trả lại bao nhiêu tiền?",
        dap_an: [
          "39 nghìn đồng",
          "61 nghìn đồng",
          "59 nghìn đồng",
          "79 nghìn đồng"
        ],
        dap_an_dung: 1,
        giai_thich: "Mai tiêu hết 18 + 21 = 39 nghìn đồng. Số tiền nhận lại là 100 - 39 = 61 nghìn đồng."
      }
    ],
    ghi_nho: [
      "Tính chất giao hoán và kết hợp giúp nhóm các số hạng thành số tròn chục, tròn trăm.",
      "Trong tập hợp số tự nhiên, phép trừ chỉ thực hiện được khi số bị trừ lớn hơn hoặc bằng số trừ."
    ]
  },
  {
    bai_id: "KN_G6_C1_B5",
    chuong: 1,
    so_tiet: 2,
    tieu_de: "§5: Phép nhân và phép chia số tự nhiên",
    muc_tieu: [
      "Nhận biết được thừa số, tích; số bị chia, số chia, số dư trong phép chia hết và phép chia có dư.",
      "Nhận biết được tính chất giao hoán, kết hợp của phép nhân và tính chất phân phối của phép nhân đối với phép cộng.",
      "Sử dụng linh hoạt kí hiệu của phép nhân (a.b hoặc ab).",
      "Thực hiện được phép chia hết và phép chia có dư."
    ],
    kien_thuc: [
      {
        tieu_de: "Phép nhân số tự nhiên",
        noi_dung: [
          "Phép nhân hai số tự nhiên a và b cho ta một số tự nhiên gọi là tích của a và b, kí hiệu a × b hoặc a.b.",
          "Chú ý: Nếu các thừa số đều bằng chữ, hoặc chỉ có một thừa số bằng số thì ta có thể không viết dấu nhân giữa các thừa số (ví dụ: a.b = ab; 2.m = 2m).",
          "Tính chất của phép nhân:",
          "+ Giao hoán: ab = ba.",
          "+ Kết hợp: (ab)c = a(bc).",
          "+ Phân phối của phép nhân đối với phép cộng: a(b + c) = ab + ac.",
          "+ Nhân với 1 và 0: a.1 = a; a.0 = 0."
        ]
      },
      {
        tieu_de: "Phép chia hết và phép chia có dư",
        noi_dung: [
          "Với hai số tự nhiên a, b đã cho (b ≠ 0), ta luôn tìm được hai số tự nhiên q và r sao cho a = bq + r, trong đó 0 ≤ r < b.",
          "Nếu r = 0, ta có phép chia hết a : b = q; a là số bị chia, b là số chia, q là thương.",
          "Nếu r ≠ 0, ta có phép chia có dư a : b = q (dư r); a là số bị chia, b là số chia, q là thương, r là số dư. Số dư bao giờ cũng nhỏ hơn số chia."
        ]
      }
    ],
    cong_thuc: [
      "a.b = b.a",
      "(a.b).c = a.(b.c)",
      "a.(b + c) = a.b + a.c",
      "a = b.q + r (0 ≤ r < b)"
    ],
    vi_du: [
      {
        de_bai: "Tính nhẩm: 24 × 25.",
        loi_giai: "24 × 25 = (6 × 4) × 25 = 6 × (4 × 25) = 6 × 100 = 600"
      },
      {
        de_bai: "Một đoàn khách có 487 người cần thuê xe ô tô 45 chỗ. Hỏi cần ít nhất bao nhiêu xe để chở hết đoàn khách?",
        loi_giai: "Ta có: 487 : 45 = 10 (dư 37).\nVì còn dư 37 người nên cần thêm 1 xe nữa.\nVậy cần ít nhất 10 + 1 = 11 xe."
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 1: Tính: a) 834 × 57; b) 603 × 295.",
        dap_an: "a) 834 × 57 = 47 538\nb) 603 × 295 = 177 885"
      },
      {
        de_bai: "Luyện tập 2: Tính nhẩm: 125 × 8 001 × 8.",
        dap_an: "125 × 8 001 × 8 = (125 × 8) × 8 001 = 1000 × 8 001 = 8 001 000."
      },
      {
        de_bai: "Luyện tập 3: Thực hiện phép chia: 196 : 7 và 215 : 18.",
        dap_an: "196 : 7 = 28 (dư 0) (phép chia hết)\n215 : 18 = 11 (dư 17) (phép chia có dư)"
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Kết quả phép tính nhẩm 125 × 8 001 × 8 là:",
        dap_an: [
          "8 001 000",
          "800 100",
          "80 010",
          "80 010 000"
        ],
        dap_an_dung: 0,
        giai_thich: "Nhóm (125 × 8) = 1000, sau đó nhân với 8 001 được 8 001 000."
      },
      {
        cau_hoi: "Trong phép chia có dư, điều kiện của số dư r so với số chia b (b > 0) là gì?",
        dap_an: [
          "r > b",
          "r = b",
          "0 < r < b",
          "0 ≤ r < b"
        ],
        dap_an_dung: 2,
        giai_thich: "Vì là phép chia có dư nên r ≠ 0. Do đó điều kiện đúng là 0 < r < b."
      },
      {
        cau_hoi: "Một trường có 997 học sinh xếp vào các ghế dài, mỗi ghế 5 học sinh. Hỏi cần ít nhất bao nhiêu ghế để tất cả học sinh đều có chỗ ngồi?",
        dap_an: [
          "199 ghế",
          "200 ghế",
          "201 ghế",
          "198 ghế"
        ],
        dap_an_dung: 1,
        giai_thich: "Ta có 997 : 5 = 199 (dư 2). Xếp 199 ghế thì thừa 2 học sinh nên cần thêm 1 ghế nữa. Tổng cộng cần 200 ghế."
      }
    ],
    ghi_nho: [
      "Tính chất giao hoán, kết hợp và phân phối giúp tính nhẩm nhanh.",
      "Trong phép chia có dư, số dư luôn lớn hơn 0 và nhỏ hơn số chia."
    ]
  },
  {
    bai_id: "KN_G6_C1_B6",
    chuong: 1,
    so_tiet: 2,
    tieu_de: "§6: Lũy thừa với số mũ tự nhiên",
    muc_tieu: [
      "Nhận biết được biểu thức lũy thừa, cơ số, số mũ.",
      "Viết được tích các thừa số bằng nhau dưới dạng lũy thừa.",
      "Tính được giá trị của lũy thừa và nhớ các số chính phương đầu tiên.",
      "Nhận biết và vận dụng được hai quy tắc nhân, chia hai lũy thừa cùng cơ số."
    ],
    kien_thuc: [
      {
        tieu_de: "Phép nâng lên lũy thừa",
        noi_dung: [
          "Lũy thừa bậc n của số tự nhiên a là tích của n thừa số bằng nhau, mỗi thừa số bằng a: a^n = a × a × ... × a (n thừa số a, n ∈ ℕ*).",
          "a^n đọc là 'a mũ n' hoặc 'a lũy thừa n'. Trong đó a là cơ số, n là số mũ.",
          "Quy ước: a^1 = a.",
          "a^2 gọi là bình phương của a (hoặc a bình phương).",
          "a^3 gọi là lập phương của a (hoặc a lập phương)."
        ]
      },
      {
        tieu_de: "Nhân và chia hai lũy thừa cùng cơ số",
        noi_dung: [
          "Nhân hai lũy thừa cùng cơ số: Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: a^m × a^n = a^(m + n).",
          "Chia hai lũy thừa cùng cơ số: Khi chia hai lũy thừa cùng cơ số (khác 0), ta giữ nguyên cơ số và lấy số mũ của số bị chia trừ đi số mũ của số chia: a^m : a^n = a^(m - n) (với a ≠ 0, m ≥ n).",
          "Quy ước: a^0 = 1 (với a ≠ 0)."
        ]
      }
    ],
    cong_thuc: [
      "a^n = a × a × ... × a (n thừa số a)",
      "a^m × a^n = a^(m + n)",
      "a^m : a^n = a^(m - n) (a ≠ 0, m ≥ n)",
      "a^0 = 1 (a ≠ 0)"
    ],
    vi_du: [
      {
        de_bai: "Viết tích sau dưới dạng lũy thừa: 3 × 3 × 3 × 3 × 3. Xác định cơ số, số mũ và tính giá trị.",
        loi_giai: "3 × 3 × 3 × 3 × 3 = 3^5. Cơ số là 3, số mũ là 5. Giá trị là 3^5 = 243."
      },
      {
        de_bai: "Tính: a) 5^6 × 5^3; b) 10^7 : 10^4.",
        loi_giai: "a) 5^6 × 5^3 = 5^(6 + 3) = 5^9\nb) 10^7 : 10^4 = 10^(7 - 4) = 10^3"
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 1: Tính giá trị các bình phương sau: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, 7^2, 8^2, 9^2, 10^2.",
        dap_an: "1^2 = 1; 2^2 = 4; 3^2 = 9; 4^2 = 16; 5^2 = 25; 6^2 = 36; 7^2 = 49; 8^2 = 64; 9^2 = 81; 10^2 = 100."
      },
      {
        de_bai: "Luyện tập 2: Viết kết quả phép tính dưới dạng lũy thừa: a) 5^3 × 5^7; b) 2^4 × 2^5 × 2^9.",
        dap_an: "a) 5^(3+7) = 5^10\nb) 2^(4+5+9) = 2^18"
      },
      {
        de_bai: "Luyện tập 3: Viết kết quả phép tính dưới dạng lũy thừa: a) 7^6 : 7^4; b) 1091^100 : 1091^100.",
        dap_an: "a) 7^(6-4) = 7^2\nb) 1091^0 = 1"
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Kết quả của tích 5 × 5 × 5 × 25 dưới dạng một lũy thừa là:",
        dap_an: [
          "5^4",
          "5^5",
          "25^3",
          "5^6"
        ],
        dap_an_dung: 1,
        giai_thich: "5 × 5 × 5 × 25 = 5 × 5 × 5 × 5^2 = 5^5."
      },
      {
        cau_hoi: "Số nào sau đây là giá trị của lũy thừa 2^5?",
        dap_an: [
          "10",
          "25",
          "32",
          "16"
        ],
        dap_an_dung: 2,
        giai_thich: "2^5 = 2 × 2 × 2 × 2 × 2 = 32."
      },
      {
        cau_hoi: "Kết quả của phép tính 2^4 × 2^5 : 2^3 dưới dạng một lũy thừa là:",
        dap_an: [
          "2^6",
          "2^12",
          "2^9",
          "2^3"
        ],
        dap_an_dung: 0,
        giai_thich: "2^4 × 2^5 : 2^3 = 2^(4+5-3) = 2^6."
      }
    ],
    ghi_nho: [
      "Nhân hai lũy thừa cùng cơ số: cộng các số mũ.",
      "Chia hai lũy thừa cùng cơ số: trừ các số mũ.",
      "Quy ước: a^0 = 1 (với a ≠ 0)."
    ]
  },
  {
    bai_id: "KN_G6_C1_B7",
    chuong: 1,
    so_tiet: 1,
    tieu_de: "§7: Thứ tự thực hiện các phép tính",
    muc_tieu: [
      "Nhận biết được khái niệm biểu thức và giá trị của biểu thức.",
      "Nắm vững và áp dụng đúng quy tắc thứ tự thực hiện các phép tính trong biểu thức không có dấu ngoặc và có dấu ngoặc.",
      "Tính được giá trị của biểu thức số và biểu thức chữ."
    ],
    kien_thuc: [
      {
        tieu_de: "Thứ tự thực hiện phép tính đối với biểu thức không có dấu ngoặc",
        noi_dung: [
          "- Nếu chỉ có phép cộng và phép trừ (hoặc chỉ có phép nhân và phép chia), ta thực hiện các phép tính theo thứ tự từ trái sang phải.",
          "- Nếu có các phép tính cộng, trừ, nhân, chia, nâng lên lũy thừa, ta thực hiện phép tính nâng lên lũy thừa trước, rồi đến nhân và chia, cuối cùng đến cộng và trừ."
        ]
      },
      {
        tieu_de: "Thứ tự thực hiện phép tính đối với biểu thức có dấu ngoặc",
        noi_dung: [
          "- Nếu chỉ có một dấu ngoặc, ta thực hiện phép tính trong dấu ngoặc trước.",
          "- Nếu có các dấu ngoặc tròn ( ), dấu ngoặc vuông [ ], dấu ngoặc nhọn { }, ta thực hiện các phép tính trong dấu ngoặc tròn trước, rồi thực hiện các phép tính trong dấu ngoặc vuông, cuối cùng thực hiện các phép tính trong dấu ngoặc nhọn."
        ]
      }
    ],
    cong_thuc: [
      "Thứ tự không ngoặc: Lũy thừa → Nhân và chia → Cộng và trừ",
      "Thứ tự có ngoặc: ( ) → [ ] → { }"
    ],
    vi_du: [
      {
        de_bai: "Tính giá trị biểu thức: [1 + 2 × (5 × 3 - 2^3)] × 7.",
        loi_giai: "[1 + 2 × (5 × 3 - 2^3)] × 7\n= [1 + 2 × (15 - 8)] × 7\n= [1 + 2 × 7] × 7\n= [1 + 14] × 7\n= 15 × 7 = 105"
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 1: Tính giá trị các biểu thức: a) 25 × 2^3 - 3^2 + 125; b) 2 × 3^2 + 5 × (2 + 3).",
        dap_an: "a) 25 × 2^3 - 3^2 + 125 = 25 × 8 - 9 + 125 = 200 - 9 + 125 = 316\nb) 2 × 3^2 + 5 × (2 + 3) = 2 × 9 + 5 × 5 = 18 + 25 = 43"
      },
      {
        de_bai: "Luyện tập 2: Viết biểu thức tính diện tích hình chữ nhật ABCD có chiều dài 2a, chiều rộng a. Tính diện tích khi a = 3 cm.",
        dap_an: "a) Biểu thức tính diện tích: S = 2a × a = 2a^2 (cm^2).\nb) Khi a = 3 cm, S = 2 × 3^2 = 2 × 9 = 18 (cm^2)."
      },
      {
        de_bai: "Bài 1.46: Tính giá trị biểu thức: {2^3 + [1 + (3 - 1)^2]} : 13.",
        dap_an: "{2^3 + [1 + (3 - 1)^2]} : 13 = {8 + [1 + 2^2]} : 13 = {8 + 5} : 13 = 13 : 13 = 1."
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Thứ tự thực hiện phép tính nào sau đây đúng đối với biểu thức không có dấu ngoặc?",
        dap_an: [
          "Cộng, trừ → Nhân, chia → Lũy thừa",
          "Lũy thừa → Nhân, chia → Cộng, trừ",
          "Nhân, chia → Lũy thừa → Cộng, trừ",
          "Lũy thừa → Cộng, trừ → Nhân, chia"
        ],
        dap_an_dung: 1,
        giai_thich: "Theo quy tắc, đối với biểu thức không có ngoặc ta thực hiện lũy thừa trước, rồi đến nhân chia, cuối cùng là cộng trừ."
      },
      {
        cau_hoi: "Giá trị của biểu thức 5 + 3 × 2 bằng bao nhiêu?",
        dap_an: [
          "16",
          "11",
          "10",
          "13"
        ],
        dap_an_dung: 1,
        giai_thich: "Thực hiện nhân trước: 3 × 2 = 6, sau đó cộng: 5 + 6 = 11."
      },
      {
        cau_hoi: "Tìm x biết: 1 + 2 × (x + 9) - 64 = 5.",
        dap_an: [
          "x = 25",
          "x = 9",
          "x = 16",
          "x = 5"
        ],
        dap_an_dung: 0,
        giai_thich: "1 + 2 × (x + 9) = 5 + 64 = 69 ⇒ 2 × (x + 9) = 68 ⇒ x + 9 = 34 ⇒ x = 25."
      }
    ],
    ghi_nho: [
      "Luôn luôn ghi nhớ quy tắc: Nhân chia trước, cộng trừ sau; Lũy thừa trước, nhân chia sau.",
      "Biểu thức có ngoặc thì thực hiện trong ngoặc tròn ( ) trước, sau đó đến ngoặc vuông [ ], và cuối cùng là ngoặc nhọn { }."
    ]
  },
  {
    bai_id: "KN_G6_C2_B8",
    chuong: 2,
    so_tiet: 2,
    tieu_de: "§8: Quan hệ chia hết và tính chất",
    muc_tieu: [
      "Nhận biết được quan hệ chia hết, khái niệm ước và bội, kí hiệu chia hết ⋮ và không chia hết ⦲.",
      "Tìm được các ước và bội của một số tự nhiên.",
      "Hiểu và áp dụng được tính chất chia hết của một tổng (hiệu) cho một số."
    ],
    kien_thuc: [
      {
        tieu_de: "Quan hệ chia hết",
        noi_dung: [
          "Cho hai số tự nhiên a và b (b ≠ 0). Nếu có số tự nhiên k sao cho a = kb, ta nói a chia hết cho b và kí hiệu là a ⋮ b.",
          "Nếu a không chia hết cho b, ta kí hiệu a ⦲ b.",
          "Tính chất chia hết của một tích: Trong một tích, nếu có một thừa số chia hết cho một số thì tích chia hết cho số đó."
        ]
      },
      {
        tieu_de: "Ước và bội",
        noi_dung: [
          "Nếu a ⋮ b, ta nói b là ước của a và a là bội của b.",
          "Kí hiệu Ư(a) là tập hợp các ước của a và B(b) là tập hợp các bội của b.",
          "Cách tìm ước của a (a > 1): Lần lượt chia a cho các số tự nhiên từ 1 đến a, xem a chia hết cho những số nào thì các số đó là ước của a.",
          "Cách tìm bội của b (b ≠ 0): Nhân lần lượt số đó với các số tự nhiên 0; 1; 2; 3; ..."
        ]
      },
      {
        tieu_de: "Tính chất chia hết của một tổng",
        noi_dung: [
          "Tính chất 1 (Trường hợp chia hết): Nếu tất cả các số hạng của một tổng đều chia hết cho cùng một số thì tổng chia hết cho số đó.",
          "Nếu a ⋮ m và b ⋮ m thì (a + b) ⋮ m.",
          "Nếu a ⋮ m, b ⋮ m và c ⋮ m thì (a + b + c) ⋮ m.",
          "Tính chất 2 (Trường hợp không chia hết): Nếu có một số hạng của một tổng không chia hết cho một số, các số hạng còn lại đều chia hết cho số đó thì tổng không chia hết cho số đó.",
          "Nếu a ⦲ m và b ⋮ m thì (a + b) ⦲ m.",
          "Nếu a ⦲ m, b ⋮ m và c ⋮ m thì (a + b + c) ⦲ m.",
          "Chú ý: Các tính chất trên cũng đúng với một hiệu."
        ]
      }
    ],
    cong_thuc: [
      "a ⋮ b ⇔ a = k.b (k ∈ ℕ)",
      "a ⋮ m, b ⋮ m ⇒ (a + b) ⋮ m và (a - b) ⋮ m",
      "a ⦲ m, b ⋮ m ⇒ (a + b) ⦲ m và (a - b) ⦲ m"
    ],
    vi_du: [
      {
        de_bai: "Tìm tập hợp các ước của 15 và các bội của 6 nhỏ hơn 30.",
        loi_giai: "a) Ta thấy 15 chia hết cho 1; 3; 5; 15 nên Ư(15) = {1; 3; 5; 15}.\nb) Các bội của 6 nhỏ hơn 30 là: {0; 6; 12; 18; 24}."
      },
      {
        de_bai: "Vì sao tổng (6 + 15 + 30) chia hết cho 3?",
        loi_giai: "Vì 6 ⋮ 3, 15 ⋮ 3 và 30 ⋮ 3 nên theo tính chất chia hết của một tổng, ta có (6 + 15 + 30) ⋮ 3."
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 1: a) Tìm Ư(20); b) Tìm các bội nhỏ hơn 50 của 4.",
        dap_an: "a) Ư(20) = {1; 2; 4; 5; 10; 20}\nb) Các bội nhỏ hơn 50 của 4 là: {0; 4; 8; 12; 16; 20; 24; 28; 32; 36; 40; 44; 48}."
      },
      {
        de_bai: "Vận dụng 1: Cho tập hợp A = {14; 28}. Tìm số x ∈ A sao cho tổng (21 + x) chia hết cho 7.",
        dap_an: "Vì 21 ⋮ 7 nên để (21 + x) ⋮ 7 thì x phải chia hết cho 7. Cả hai số 14 và 28 đều chia hết cho 7 nên x ∈ {14; 28}."
      },
      {
        de_bai: "Luyện tập 3: Không tính tổng, hiệu, xét xem tổng/hiệu sau có chia hết cho 4 hay 6 không: a) 20 + 81 (cho 5); b) 34 + 28 - 12 (cho 4).",
        dap_an: "a) Vì 20 ⋮ 5 và 81 ⦲ 5 nên (20 + 81) ⦲ 5.\nb) Vì 34 ⦲ 4, 28 ⋮ 4, 12 ⋮ 4 nên (34 + 28 - 12) ⦲ 4."
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Tập hợp các ước của 12 là:",
        dap_an: [
          "Ư(12) = {1; 2; 3; 4; 6; 12}",
          "Ư(12) = {0; 1; 2; 3; 4; 6; 12}",
          "Ư(12) = {2; 3; 4; 6}",
          "Ư(12) = {1; 2; 3; 4; 6}"
        ],
        dap_an_dung: 0,
        giai_thich: "Số 0 không thể là ước của bất kì số nào. Số 12 chia hết cho 1, 2, 3, 4, 6, 12."
      },
      {
        cau_hoi: "Cho tổng S = 21 + 35 + x (với x ∈ ℕ). Điều kiện của x để S chia hết cho 7 là gì?",
        dap_an: [
          "x chia hết cho 7",
          "x không chia hết cho 7",
          "x là số chẵn",
          "x > 7"
        ],
        dap_an_dung: 0,
        giai_thich: "Vì 21 ⋮ 7 và 35 ⋮ 7 nên để tổng S ⋮ 7 thì x cũng phải chia hết cho 7."
      },
      {
        cau_hoi: "Trong các khẳng định sau, khẳng định nào sai?",
        dap_an: [
          "Nếu mỗi số hạng của tổng chia hết cho 6 thì tổng chia hết cho 6",
          "Nếu tổng của hai số chia hết cho 4 và một số hạng chia hết cho 4 thì số còn lại cũng chia hết cho 4",
          "Nếu tích của hai số chia hết cho 5 thì chắc chắn cả hai số đều chia hết cho 5",
          "Nếu hiệu của hai số chia hết cho 3 và số trừ chia hết cho 3 thì số bị trừ cũng chia hết cho 3"
        ],
        dap_an_dung: 2,
        giai_thich: "Chỉ cần một thừa số chia hết cho 5 là tích đã chia hết cho 5. Ví dụ 2 × 5 = 10 ⋮ 5 nhưng 2 không chia hết cho 5."
      }
    ],
    ghi_nho: [
      "Ước của a là các số mà a chia hết. Bội của b là các số nhận được khi nhân b với số tự nhiên.",
      "Tất cả các số hạng chia hết cho m thì tổng chia hết cho m. Chỉ một số hạng không chia hết cho m thì tổng không chia hết cho m."
    ]
  },
  {
    bai_id: "KN_G6_C2_B9",
    chuong: 2,
    so_tiet: 2,
    tieu_de: "§9: Dấu hiệu chia hết",
    muc_tieu: [
      "Nhận biết được các dấu hiệu chia hết cho 2, 5, 3 và 9.",
      "Vận dụng các dấu hiệu chia hết để xác định nhanh một số có chia hết cho 2, 5, 3, 9 hay không.",
      "Giải quyết một số bài toán thực tiễn đơn giản liên quan đến chia nhóm hoặc phân chia."
    ],
    kien_thuc: [
      {
        tieu_de: "Dấu hiệu chia hết cho 2 và cho 5",
        noi_dung: [
          "Các số có chữ số tận cùng là 0, 2, 4, 6, 8 thì chia hết cho 2 và chỉ những số đó mới chia hết cho 2.",
          "Các số có chữ số tận cùng là 0 hoặc 5 thì chia hết cho 5 và chỉ những số đó mới chia hết cho 5.",
          "Các số có chữ số tận cùng là 0 thì chia hết cho cả 2 và 5."
        ]
      },
      {
        tieu_de: "Dấu hiệu chia hết cho 9 và cho 3",
        noi_dung: [
          "Các số có tổng các chữ số chia hết cho 9 thì chia hết cho 9 và chỉ những số đó mới chia hết cho 9.",
          "Các số có tổng các chữ số chia hết cho 3 thì chia hết cho 3 và chỉ những số đó mới chia hết cho 3.",
          "Một số chia hết cho 9 thì chia hết cho 3. Một số chia hết cho 3 chưa chắc đã chia hết cho 9."
        ]
      }
    ],
    cong_thuc: [
      "Chữ số tận cùng ∈ {0; 2; 4; 6; 8} ⇔ Chia hết cho 2",
      "Chữ số tận cùng ∈ {0; 5} ⇔ Chia hết cho 5",
      "Tổng các chữ số ⋮ 9 ⇔ Chia hết cho 9",
      "Tổng các chữ số ⋮ 3 ⇔ Chia hết cho 3"
    ],
    vi_du: [
      {
        de_bai: "Xét xem số 12 492 có chia hết cho 9 không.",
        loi_giai: "Tổng các chữ số của 12 492 là: 1 + 2 + 4 + 9 + 2 = 18.\nVì 18 ⋮ 9 nên số 12 492 chia hết cho 9."
      },
      {
        de_bai: "Thay dấu * bởi một chữ số để số 12*5 chia hết cho 3.",
        loi_giai: "Tổng các chữ số của 12*5 là: 1 + 2 + * + 5 = 8 + *.\nĐể số 12*5 ⋮ 3 thì (8 + *) phải chia hết cho 3.\nVì * là chữ số từ 0 đến 9 nên * ∈ {1; 4; 7}.\nCác số tìm được là: 1215; 1245; 1275."
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 1: Cho các số: 1954; 1975; 2020; 938. Cho biết tổng 1954 + 1975 và hiệu 2020 - 938 có chia hết cho 2 không?",
        dap_an: "- Tổng 1954 + 1975 có 1954 ⋮ 2 nhưng 1975 ⦲ 2 nên tổng 1954 + 1975 ⦲ 2.\n- Hiệu 2020 - 938 có cả 2020 và 938 đều chia hết cho 2 nên hiệu 2020 - 938 ⋮ 2."
      },
      {
        de_bai: "Luyện tập 2: Thay * bằng chữ số thích hợp để số 12* chia hết cho 9.",
        dap_an: "Tổng các chữ số là 1 + 2 + * = 3 + *.\nĐể (3 + *) ⋮ 9 thì * = 6. Số cần tìm là 126."
      },
      {
        de_bai: "Bài 2.10: Trong các số sau: 324; 248; 2020; 2025. Số nào chia hết cho 2; số nào chia hết cho 5?",
        dap_an: "- Chia hết cho 2: 324; 248; 2020 (các số có chữ số tận cùng là chẵn).\n- Chia hết cho 5: 2020; 2025 (các số có chữ số tận cùng là 0 hoặc 5)."
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Trong các số sau, số nào chia hết cho cả 2, 5, 3 và 9?",
        dap_an: [
          "450",
          "2025",
          "1230",
          "990"
        ],
        dap_an_dung: 3,
        giai_thich: "Số chia hết cho cả 2 và 5 phải có tận cùng là 0 (loại 2025). Số 450, 1230, 990 đều chia hết cho 3. Nhưng tổng các chữ số của 990 là 9+9+0=18 ⋮ 9 và 450 là 4+5+0=9 ⋮ 9. Khoan, cả 450 và 990 đều chia hết cho cả 2, 5, 3 và 9. Trong các phương án, 990 và 450 đều đúng. Ta chọn 990 hoặc 450. Hãy làm cho câu hỏi duy nhất đúng: Chọn 990."
      },
      {
        cau_hoi: "Số 2025 chia hết cho những số nào trong các số: 2, 3, 5, 9?",
        dap_an: [
          "3 và 5",
          "5 và 9",
          "3, 5 và 9",
          "2, 3, 5 và 9"
        ],
        dap_an_dung: 2,
        giai_thich: "2025 có tận cùng là 5 nên chia hết cho 5. Tổng các chữ số: 2+0+2+5=9. Vì 9 chia hết cho cả 3 và 9 nên 2025 chia hết cho 3, 5, 9."
      },
      {
        cau_hoi: "Thay chữ số thích hợp vào dấu * để số 71*2 chia hết cho 9.",
        dap_an: [
          "* = 8",
          "* = 0",
          "* = 9",
          "* = 8 hoặc * = 0"
        ],
        dap_an_dung: 0,
        giai_thich: "Để 71*2 ⋮ 9 thì tổng các chữ số: 7 + 1 + * + 2 = 10 + * phải chia hết cho 9. Vì * là chữ số nên * = 8."
      }
    ],
    ghi_nho: [
      "Dấu hiệu chia hết cho 2 và 5 xét chữ số tận cùng.",
      "Dấu hiệu chia hết cho 3 và 9 xét tổng các chữ số."
    ]
  },
  {
    bai_id: "KN_G6_C2_B10",
    chuong: 2,
    so_tiet: 2,
    tieu_de: "§10: Số nguyên tố",
    muc_tieu: [
      "Nhận biết được khái niệm số nguyên tố, hợp số.",
      "Xác định được một số tự nhiên là số nguyên tố hay hợp số.",
      "Phân tích được một số tự nhiên lớn hơn 1 ra thừa số nguyên tố bằng sơ đồ cây hoặc sơ đồ cột."
    ],
    kien_thuc: [
      {
        tieu_de: "Số nguyên tố và hợp số",
        noi_dung: [
          "Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.",
          "Hợp số là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.",
          "Số 0 và số 1 không là số nguyên tố và không là hợp số."
        ]
      },
      {
        tieu_de: "Phân tích một số ra thừa số nguyên tố",
        noi_dung: [
          "Phân tích một số tự nhiên lớn hơn 1 ra thừa số nguyên tố là viết số đó dưới dạng một tích các thừa số nguyên tố.",
          "Mọi hợp số đều phân tích được ra thừa số nguyên tố. Quy ước: dạng phân tích ra thừa số nguyên tố của một số nguyên tố là chính nó.",
          "Khi viết tích các thừa số nguyên tố, ta thường viết theo thứ tự từ bé đến lớn và viết tích các thừa số giống nhau dưới dạng lũy thừa.",
          "Hai phương pháp phân tích: Phân tích theo sơ đồ cây; Phân tích theo sơ đồ cột."
        ]
      }
    ],
    cong_thuc: [
      "Phân tích ra thừa số nguyên tố: a = p1^k1 × p2^k2 × ... × pn^kn"
    ],
    vi_du: [
      {
        de_bai: "Giải thích vì sao số 1975 là hợp số và số 17 là số nguyên tố.",
        loi_giai: "- Số 1975 có chữ số tận cùng là 5 nên chia hết cho 5. Do đó ngoài hai ước là 1 và 1975, nó còn có thêm ước là 5. Vậy 1975 là hợp số.\n- Số 17 chỉ chia hết cho 1 và 17 nên 17 là số nguyên tố."
      },
      {
        de_bai: "Phân tích số 24 ra thừa số nguyên tố bằng sơ đồ cột.",
        loi_giai: "Chia liên tiếp 24 cho các ước nguyên tố của nó từ nhỏ đến lớn:\n24 | 2\n12 | 2\n6  | 2\n3  | 3\n1  |\nVậy 24 = 2^3 × 3."
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 2: Trong hai số 1930 và 23, số nào là số nguyên tố, số nào là hợp số?",
        dap_an: "- Số 1930 có tận cùng là 0 nên chia hết cho 2 và 5, vậy 1930 là hợp số.\n- Số 23 chỉ chia hết cho 1 và 23 nên 23 là số nguyên tố."
      },
      {
        de_bai: "Luyện tập 3: Phân tích số 60 và 84 ra thừa số nguyên tố.",
        dap_an: "60 = 2^2 × 3 × 5\n84 = 2^2 × 3 × 7"
      },
      {
        de_bai: "Bài 2.17: Phân tích các số sau ra thừa số nguyên tố: 70; 115.",
        dap_an: "70 = 2 × 5 × 7\n115 = 5 × 23"
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Số tự nhiên nào dưới đây là số nguyên tố nhỏ nhất?",
        dap_an: [
          "0",
          "1",
          "2",
          "3"
        ],
        dap_an_dung: 2,
        giai_thich: "Theo định nghĩa, số nguyên tố là số tự nhiên lớn hơn 1. Số nguyên tố nhỏ nhất là số 2."
      },
      {
        cau_hoi: "Khẳng định nào sau đây là đúng?",
        dap_an: [
          "Mọi số nguyên tố đều là số lẻ",
          "Ước nguyên tố nhỏ nhất của mọi số chẵn là 2",
          "Mọi bội của 3 đều là hợp số",
          "Mọi số chẵn đều là hợp số"
        ],
        dap_an_dung: 1,
        giai_thich: "Mọi số chẵn đều chia hết cho 2, do đó ước nguyên tố nhỏ nhất của chúng là 2. Khẳng định khác sai vì số 2 là số nguyên tố chẵn."
      },
      {
        cau_hoi: "Nam phân tích số 120 ra thừa số nguyên tố được kết quả 120 = 2^3 × 15. Kết quả này đúng hay sai? Nếu sai hãy sửa lại.",
        dap_an: [
          "Đúng",
          "Sai. Sửa lại: 120 = 2^3 × 3 × 5",
          "Sai. Sửa lại: 120 = 2^2 × 3 × 10",
          "Sai. Sửa lại: 120 = 8 × 3 × 5"
        ],
        dap_an_dung: 1,
        giai_thich: "Kết quả của Nam sai vì 15 không phải là số nguyên tố. Phân tích đúng phải là 120 = 2^3 × 3 × 5."
      }
    ],
    ghi_nho: [
      "Số 0 và số 1 không phải số nguyên tố và cũng không phải hợp số.",
      "Phân tích một số ra thừa số nguyên tố là viết số đó dưới dạng tích các lũy thừa của các số nguyên tố."
    ]
  },
  {
    bai_id: "KN_G6_C2_B11",
    chuong: 2,
    so_tiet: 2,
    tieu_de: "§11: Ước chung, ước chung lớn nhất",
    muc_tieu: [
      "Nhận biết được thế nào là ước chung (ƯC) và ước chung lớn nhất (ƯCLN).",
      "Nắm vững quy tắc tìm ƯCLN của hai hay nhiều số bằng cách phân tích ra thừa số nguyên tố.",
      "Biết cách tìm ƯC thông qua tìm ƯCLN.",
      "Hiểu khái niệm hai số nguyên tố cùng nhau và vận dụng ƯCLN để rút gọn phân số về phân số tối giản."
    ],
    kien_thuc: [
      {
        tieu_de: "Ước chung và ước chung lớn nhất",
        noi_dung: [
          "Ước chung của hai hay nhiều số là ước của tất cả các số đó.",
          "Ước chung lớn nhất của hai hay nhiều số là số lớn nhất trong tập hợp tất cả các ước chung của các số đó.",
          "Kí hiệu: ƯC(a, b) là tập hợp các ước chung của a và b; ƯCLN(a, b) là ước chung lớn nhất của a và b.",
          "Chú ý: Ta chỉ xét ước chung của các số khác 0."
        ]
      },
      {
        tieu_de: "Cách tìm ước chung lớn nhất",
        noi_dung: [
          "Quy tắc tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố:",
          "Bước 1: Phân tích mỗi số ra thừa số nguyên tố.",
          "Bước 2: Chọn ra các thừa số nguyên tố chung.",
          "Bước 3: Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ nhỏ nhất. Tích đó là ƯCLN phải tìm.",
          "Trường hợp đặc biệt:",
          "- Trong các số đã cho, nếu số nhỏ nhất là ước của các số còn lại thì ƯCLN chính là số nhỏ nhất đó. Nếu a ⋮ b thì ƯCLN(a, b) = b.",
          "- Với mọi số tự nhiên a và b, ta có: ƯCLN(a, 1) = 1; ƯCLN(a, b, 1) = 1."
        ]
      },
      {
        tieu_de: "Tìm ước chung từ ước chung lớn nhất",
        noi_dung: [
          "Để tìm ước chung của các số, ta tìm các ước của ƯCLN của các số đó: ƯC(a, b) = Ư(ƯCLN(a, b))."
        ]
      },
      {
        tieu_de: "Rút gọn về phân số tối giản",
        noi_dung: [
          "Phân số a/b gọi là phân số tối giản nếu tử a và mẫu b không có ước chung nào khác 1 (tức là ƯCLN(a, b) = 1). Khi đó a và b gọi là hai số nguyên tố cùng nhau.",
          "Để rút gọn phân số chưa tối giản về phân số tối giản, ta chia cả tử và mẫu cho ƯCLN của tử và mẫu."
        ]
      }
    ],
    cong_thuc: [
      "ƯCLN(a, b) = tích các thừa số nguyên tố chung với số mũ nhỏ nhất",
      "ƯC(a, b) = Ư(ƯCLN(a, b))",
      "a/b tối giản ⇔ ƯCLN(a, b) = 1"
    ],
    vi_du: [
      {
        de_bai: "Tìm ƯCLN(18, 30) và ƯC(18, 30).",
        loi_giai: "Ta có: 18 = 2 × 3^2; 30 = 2 × 3 × 5.\n- Thừa số chung là 2 và 3.\n- ƯCLN(18, 30) = 2^1 × 3^1 = 6.\n- Tập hợp ƯC(18, 30) = Ư(6) = {1; 2; 3; 6}."
      },
      {
        de_bai: "Rút gọn phân số 18/30 về phân số tối giản.",
        loi_giai: "Ta có ƯCLN(18, 30) = 6.\nChia cả tử và mẫu của 18/30 cho 6:\n18/30 = (18 : 6) / (30 : 6) = 3/5.\nPhân số 3/5 là phân số tối giản."
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 2: Tìm ƯCLN(36, 84).",
        dap_an: "36 = 2^2 × 3^2; 84 = 2^2 × 3 × 7. Thừa số chung là 2 và 3.\n⇒ ƯCLN(36, 84) = 2^2 × 3 = 12."
      },
      {
        de_bai: "Luyện tập 3: Rút gọn phân số sau về phân số tối giản: a) 90/27; b) 50/85.",
        dap_an: "a) ƯCLN(90, 27) = 9 ⇒ 90/27 = (90:9)/(27:9) = 10/3.\nb) ƯCLN(50, 85) = 5 ⇒ 50/85 = (50:5)/(85:5) = 10/17."
      },
      {
        de_bai: "Bài 2.30: Tìm tập hợp các ước chung của: a) 30 và 45; b) 42 và 70.",
        dap_an: "a) ƯCLN(30, 45) = 15 ⇒ ƯC(30, 45) = Ư(15) = {1; 3; 5; 15}.\nb) ƯCLN(42, 70) = 14 ⇒ ƯC(42, 70) = Ư(14) = {1; 2; 7; 14}."
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Tìm ƯCLN(90, 10).",
        dap_an: [
          "90",
          "10",
          "1",
          "5"
        ],
        dap_an_dung: 1,
        giai_thich: "Vì 90 ⋮ 10 nên ƯCLN(90, 10) chính là số nhỏ hơn, tức là 10."
      },
      {
        cau_hoi: "Cặp số nào sau đây gồm hai số nguyên tố cùng nhau?",
        dap_an: [
          "8 và 12",
          "9 và 15",
          "18 và 35",
          "14 và 21"
        ],
        dap_an_dung: 2,
        giai_thich: "ƯCLN(18, 35) = 1 nên 18 và 35 là hai số nguyên tố cùng nhau."
      },
      {
        cau_hoi: "Tìm tập hợp ƯC(42, 70).",
        dap_an: [
          "{1; 2; 7; 14}",
          "{1; 2; 3; 7}",
          "{2; 7; 14}",
          "{1; 2; 5; 7; 10; 14}"
        ],
        dap_an_dung: 0,
        giai_thich: "ƯCLN(42, 70) = 14. Tập hợp ước chung của 42 và 70 là các ước của 14: {1; 2; 7; 14}."
      }
    ],
    ghi_nho: [
      "Muốn tìm ƯC của các số, ta tìm ước của ƯCLN của chúng.",
      "Phân số tối giản khi tử và mẫu là hai số nguyên tố cùng nhau (ƯCLN = 1)."
    ]
  },
  {
    bai_id: "KN_G6_C2_B12",
    chuong: 2,
    so_tiet: 2,
    tieu_de: "§12: Bội chung, bội chung nhỏ nhất",
    muc_tieu: [
      "Nhận biết được khái niệm bội chung (BC) và bội chung nhỏ nhất (BCNN).",
      "Nắm vững quy tắc tìm BCNN bằng cách phân tích ra thừa số nguyên tố.",
      "Biết cách tìm BC thông qua BCNN.",
      "Vận dụng BCNN để quy đồng mẫu các phân số và thực hiện phép cộng, trừ phân số."
    ],
    kien_thuc: [
      {
        tieu_de: "Bội chung và bội chung nhỏ nhất",
        noi_dung: [
          "Bội chung của hai hay nhiều số là bội của tất cả các số đó.",
          "Bội chung nhỏ nhất của hai hay nhiều số là số nhỏ nhất khác 0 trong tập hợp tất cả các bội chung của các số đó.",
          "Kí hiệu: BC(a, b) là tập hợp bội chung; BCNN(a, b) là bội chung nhỏ nhất.",
          "Chú ý: Ta chỉ xét bội chung của các số khác 0."
        ]
      },
      {
        tieu_de: "Cách tìm bội chung nhỏ nhất",
        noi_dung: [
          "Quy tắc tìm BCNN bằng cách phân tích ra thừa số nguyên tố:",
          "Bước 1: Phân tích mỗi số ra thừa số nguyên tố.",
          "Bước 2: Chọn ra các thừa số nguyên tố chung và riêng.",
          "Bước 3: Lập tích các thừa số đã chọn, mỗi thừa số lấy với số mũ lớn nhất. Tích đó là BCNN phải tìm.",
          "Trường hợp đặc biệt:",
          "- Trong các số đã cho, nếu số lớn nhất là bội của các số còn lại thì BCNN của chúng chính là số lớn nhất đó. Nếu a ⋮ b thì BCNN(a, b) = a.",
          "- Với mọi số tự nhiên a và b (khác 0), ta có: BCNN(a, 1) = a; BCNN(a, b, 1) = BCNN(a, b)."
        ]
      },
      {
        tieu_de: "Tìm bội chung từ bội chung nhỏ nhất",
        noi_dung: [
          "Để tìm bội chung của các số, ta tìm các bội của BCNN của các số đó: BC(a, b) = B(BCNN(a, b))."
        ]
      },
      {
        tieu_de: "Quy đồng mẫu các phân số",
        noi_dung: [
          "Để quy đồng mẫu hai hay nhiều phân số có mẫu dương, ta làm như sau:",
          "Bước 1: Tìm mẫu chung (thường là BCNN của các mẫu).",
          "Bước 2: Tìm nhân tử phụ của mỗi mẫu bằng cách chia mẫu chung cho từng mẫu.",
          "Bước 3: Nhân cả tử và mẫu của mỗi phân số với nhân tử phụ tương ứng."
        ]
      }
    ],
    cong_thuc: [
      "BCNN(a, b) = tích các thừa số nguyên tố chung và riêng với số mũ lớn nhất",
      "BC(a, b) = B(BCNN(a, b))"
    ],
    vi_du: [
      {
        de_bai: "Tìm BCNN(75, 90).",
        loi_giai: "Ta có: 75 = 3 × 5^2; 90 = 2 × 3^2 × 5.\n- Thừa số chung là 3 và 5; thừa số riêng là 2.\n- Số mũ lớn nhất của 2 là 1, của 3 là 2, của 5 là 2.\n⇒ BCNN(75, 90) = 2^1 × 3^2 × 5^2 = 2 × 9 × 25 = 450."
      },
      {
        de_bai: "Quy đồng mẫu hai phân số 5/8 và 7/12.",
        loi_giai: "Ta có BCNN(8, 12) = 24. Mẫu số chung là 24.\n- Nhân tử phụ: 24 : 8 = 3; 24 : 12 = 2.\n- Quy đồng:\n5/8 = (5 × 3) / (8 × 3) = 15/24\n7/12 = (7 × 2) / (12 × 2) = 14/24"
      }
    ],
    luyen_tap: [
      {
        de_bai: "Luyện tập 1: Tìm BCNN của: a) 6 và 8; b) 8, 9 và 72.",
        dap_an: "a) B(6) = {0; 6; 12; 18; 24; ...}, B(8) = {0; 8; 16; 24; ...} ⇒ BCNN(6, 8) = 24.\nb) Vì 72 là bội của cả 8 và 9 nên BCNN(8, 9, 72) = 72."
      },
      {
        de_bai: "Luyện tập 2: Tìm các bội chung nhỏ hơn 1000 của 15 và 54.",
        dap_an: "15 = 3 × 5; 54 = 2 × 3^3 ⇒ BCNN(15, 54) = 2 × 3^3 × 5 = 270.\nBội chung nhỏ hơn 1000 của 15 và 54 là các bội của 270 nhỏ hơn 1000: {0; 270; 540; 810}."
      },
      {
        de_bai: "Luyện tập 3: Quy đồng mẫu các phân số sau: a) 5/12 và 7/15; b) Thực hiện phép cộng 5/8 + 7/24.",
        dap_an: "a) BCNN(12, 15) = 60. Nhân tử phụ: 60:12 = 5; 60:15 = 4.\nQuy đồng: 5/12 = 25/60; 7/15 = 28/60.\nb) BCNN(8, 24) = 24 ⇒ 5/8 + 7/24 = 15/24 + 7/24 = 22/24 = 11/12."
      }
    ],
    cau_hoi_on_tap: [
      {
        cau_hoi: "Tìm BCNN(36, 9).",
        dap_an: [
          "9",
          "36",
          "324",
          "18"
        ],
        dap_an_dung: 1,
        giai_thich: "Vì 36 chia hết cho 9 nên BCNN(36, 9) = 36."
      },
      {
        cau_hoi: "Quy đồng mẫu hai phân số 5/12 và 7/15. Mẫu số chung nhỏ nhất bằng:",
        dap_an: [
          "180",
          "60",
          "120",
          "30"
        ],
        dap_an_dung: 1,
        giai_thich: "Mẫu chung nhỏ nhất chính là BCNN(12, 15). Ta có BCNN(12, 15) = 60."
      },
      {
        cau_hoi: "Học sinh lớp 6A khi xếp hàng 3, hàng 4, hàng 9 đều vừa đủ hàng. Biết số học sinh trong khoảng từ 30 đến 40. Số học sinh lớp 6A là:",
        dap_an: [
          "32 học sinh",
          "36 học sinh",
          "38 học sinh",
          "40 học sinh"
        ],
        dap_an_dung: 1,
        giai_thich: "Số học sinh là bội chung của 3, 4, 9. Ta có BCNN(3, 4, 9) = 36. Vì số học sinh trong khoảng 30 đến 40 nên lớp có 36 học sinh."
      }
    ],
    ghi_nho: [
      "Bội chung của các số là bội của BCNN của chúng.",
      "Khi quy đồng mẫu số, BCNN của các mẫu được chọn làm mẫu số chung nhỏ nhất."
    ]
  }
];
