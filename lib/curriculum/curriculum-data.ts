import { CurriculumStandard, BookMapping, TimelineWeek } from './types';

// ============ TOÁN ============
export const TOAN_CURRICULUM: CurriculumStandard[] = [
  // Lớp 1
  { id: 'TOAN_L1_SO_DEN_10', mon: 'TOAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Các số đến 10', yeu_cau_can_dat: ['Đếm, đọc, viết các số trong phạm vi 10', 'So sánh các số trong phạm vi 10', 'Tách và gộp số'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L1_PHEP_CONG_TRU_10', mon: 'TOAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Phép cộng, phép trừ trong phạm vi 10', yeu_cau_can_dat: ['Thực hiện phép cộng trong phạm vi 10', 'Thực hiện phép trừ trong phạm vi 10', 'Giải bài toán có lời văn đơn giản'], tien_quyet: ['TOAN_L1_SO_DEN_10'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L1_SO_DEN_100', mon: 'TOAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Các số đến 100', yeu_cau_can_dat: ['Đọc, viết các số có hai chữ số', 'So sánh các số có hai chữ số', 'Viết số liền trước, liền sau'], tien_quyet: ['TOAN_L1_SO_DEN_10'], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L1_PHEP_TINH_100', mon: 'TOAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Phép cộng, trừ (không nhớ) trong phạm vi 100', yeu_cau_can_dat: ['Thực hiện phép cộng không nhớ', 'Thực hiện phép trừ không nhớ'], tien_quyet: ['TOAN_L1_SO_DEN_100'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L1_HINH_PHANG', mon: 'TOAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Hình phẳng cơ bản', yeu_cau_can_dat: ['Nhận dạng hình vuông, tròn, tam giác, chữ nhật', 'Nhận dạng hình khối quen thuộc'], tien_quyet: [], muc_do_goi_y: ['nhan_biet'] },
  { id: 'TOAN_L1_DO_DO_DAI', mon: 'TOAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Đo độ dài', yeu_cau_can_dat: ['Sử dụng đơn vị cm', 'Đo độ dài đoạn thẳng'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L1_THOI_GIAN', mon: 'TOAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Xem giờ đúng, ngày trong tuần', yeu_cau_can_dat: ['Xem giờ đúng trên đồng hồ', 'Biết các ngày trong tuần', 'Đọc lịch đơn giản'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },

  // Lớp 2
  { id: 'TOAN_L2_PHEP_CONG_TRU_CO_NHO', mon: 'TOAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Phép cộng/trừ có nhớ trong phạm vi 100', yeu_cau_can_dat: ['Thực hiện phép cộng có nhớ', 'Thực hiện phép trừ có nhớ', 'Tính nhẩm'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L2_SO_DEN_1000', mon: 'TOAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Số đến 1000', yeu_cau_can_dat: ['Đọc, viết số có ba chữ số', 'So sánh số có ba chữ số'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L2_BANG_NHAN_CHIA', mon: 'TOAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Bảng nhân, chia 2, 5', yeu_cau_can_dat: ['Học thuộc bảng nhân 2, 5', 'Học thuộc bảng chia 2, 5', 'Làm quen phép nhân, chia'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L2_DO_LUONG', mon: 'TOAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Đơn vị đo lường', yeu_cau_can_dat: ['Đơn vị kg, lít, mét, đề-xi-mét', 'Đọc giờ, phút', 'Tiền Việt Nam'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L2_HINH_HOC', mon: 'TOAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Điểm, đoạn thẳng, đường thẳng', yeu_cau_can_dat: ['Nhận biết điểm, đoạn thẳng, đường thẳng', 'Nhận dạng hình tứ giác'], tien_quyet: [], muc_do_goi_y: ['nhan_biet'] },
  { id: 'TOAN_L2_THONG_KE', mon: 'TOAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Thống kê và Xác suất', chu_de: 'Thu thập, biểu đồ tranh', yeu_cau_can_dat: ['Thu thập, kiểm đếm số liệu', 'Đọc biểu đồ tranh đơn giản', 'Nhận biết chắc chắn, có thể, không thể'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },

  // Lớp 3
  { id: 'TOAN_L3_BANG_NHAN_CHIA', mon: 'TOAN', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Bảng nhân/chia 2→9', yeu_cau_can_dat: ['Học thuộc bảng nhân từ 2 đến 9', 'Học thuộc bảng chia từ 2 đến 9', 'Nhân chia ngoài bảng'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L3_SO_DEN_100000', mon: 'TOAN', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Số đến 100 000', yeu_cau_can_dat: ['Đọc, viết số đến 100 000', 'So sánh số', 'Làm tròn số'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L3_PHAN_SO_DON_GIAN', mon: 'TOAN', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Phân số đơn giản', yeu_cau_can_dat: ['Nhận biết phân số 1/2, 1/3, 1/4...', 'Đọc, viết phân số đơn giản'], tien_quyet: [], muc_do_goi_y: ['nhan_biet'] },
  { id: 'TOAN_L3_GOC_VUONG', mon: 'TOAN', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Góc, góc vuông', yeu_cau_can_dat: ['Nhận biết góc, góc vuông', 'Chu vi, diện tích hình vuông, chữ nhật'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 4
  { id: 'TOAN_L4_SO_LON', mon: 'TOAN', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Số có nhiều chữ số', yeu_cau_can_dat: ['Đọc, viết số có nhiều chữ số', 'Hàng và lớp', 'Tính chất phép tính'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L4_PHAN_SO', mon: 'TOAN', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Phân số', yeu_cau_can_dat: ['Khái niệm phân số', 'Rút gọn, quy đồng mẫu số', 'Cộng, trừ, nhân, chia phân số'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L4_HINH_HOC', mon: 'TOAN', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Hình học phẳng', yeu_cau_can_dat: ['Hai đường thẳng vuông góc, song song', 'Hình bình hành, hình thoi', 'Góc nhọn, góc tù, góc bẹt'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },

  // Lớp 5
  { id: 'TOAN_L5_SO_THAP_PHAN', mon: 'TOAN', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Số thập phân', yeu_cau_can_dat: ['Đọc, viết số thập phân', 'So sánh số thập phân', '4 phép tính với số thập phân'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L5_TI_SO_PHAN_TRAM', mon: 'TOAN', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Số và phép tính', chu_de: 'Tỉ số, tỉ số phần trăm', yeu_cau_can_dat: ['Khái niệm tỉ số', 'Tỉ số phần trăm', 'Bài toán về phần trăm'], tien_quyet: ['TOAN_L5_SO_THAP_PHAN'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L5_HINH_HOC', mon: 'TOAN', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Hình học và Đo lường', chu_de: 'Hình học không gian', yeu_cau_can_dat: ['Chu vi, diện tích hình tròn', 'Diện tích xung quanh, toàn phần, thể tích hình hộp'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 6
  { id: 'TOAN_L6_SO_TU_NHIEN', mon: 'TOAN', lop: 6, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Số tự nhiên, lũy thừa', yeu_cau_can_dat: ['Tập hợp số tự nhiên', 'Lũy thừa với số mũ tự nhiên', 'Chia hết, số nguyên tố, ƯCLN, BCNN'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L6_SO_NGUYEN', mon: 'TOAN', lop: 6, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Số nguyên', yeu_cau_can_dat: ['Số nguyên âm, số nguyên dương', 'Phép tính trên tập số nguyên', 'So sánh số nguyên'], tien_quyet: ['TOAN_L6_SO_TU_NHIEN'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L6_PHAN_SO', mon: 'TOAN', lop: 6, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Phân số & số thập phân', yeu_cau_can_dat: ['Phân số, tỉ số, phần trăm', 'Phép tính với phân số', 'Số thập phân'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L6_HINH_HOC_TRUC_QUAN', mon: 'TOAN', lop: 6, cap_hoc: 'THCS', mach: 'Hình học và Đo lường', chu_de: 'Hình học trực quan', yeu_cau_can_dat: ['Tam giác đều, hình vuông, lục giác đều', 'Chu vi, diện tích các hình'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L6_HINH_HOC_PHANG', mon: 'TOAN', lop: 6, cap_hoc: 'THCS', mach: 'Hình học và Đo lường', chu_de: 'Hình học phẳng cơ bản', yeu_cau_can_dat: ['Điểm, đường thẳng, đoạn thẳng', 'Góc'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L6_THONG_KE', mon: 'TOAN', lop: 6, cap_hoc: 'THCS', mach: 'Thống kê và Xác suất', chu_de: 'Thống kê & xác suất thực nghiệm', yeu_cau_can_dat: ['Thu thập, biểu diễn dữ liệu', 'Xác suất thực nghiệm'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 7
  { id: 'TOAN_L7_SO_HUU_TI', mon: 'TOAN', lop: 7, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Số hữu tỉ, số thực', yeu_cau_can_dat: ['Số hữu tỉ và phép tính', 'Số thực', 'Căn bậc hai số học'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L7_TI_LE_THUC', mon: 'TOAN', lop: 7, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Tỉ lệ thức, đại lượng tỉ lệ', yeu_cau_can_dat: ['Tỉ lệ thức', 'Đại lượng tỉ lệ thuận, nghịch'], tien_quyet: ['TOAN_L7_SO_HUU_TI'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L7_BIEU_THUC_DAI_SO', mon: 'TOAN', lop: 7, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Biểu thức đại số, đa thức', yeu_cau_can_dat: ['Biểu thức đại số', 'Đa thức một biến'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L7_TAM_GIAC', mon: 'TOAN', lop: 7, cap_hoc: 'THCS', mach: 'Hình học và Đo lường', chu_de: 'Tam giác', yeu_cau_can_dat: ['Góc, đường thẳng song song', 'Tam giác bằng nhau', 'Tam giác cân', 'Đường trung trực'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 8
  { id: 'TOAN_L8_DA_THUC', mon: 'TOAN', lop: 8, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Đa thức, hằng đẳng thức', yeu_cau_can_dat: ['Đa thức nhiều biến', 'Hằng đẳng thức đáng nhớ', 'Phân thức đại số'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L8_PHUONG_TRINH', mon: 'TOAN', lop: 8, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Phương trình bậc nhất một ẩn', yeu_cau_can_dat: ['Phương trình bậc nhất một ẩn', 'Giải và biện luận phương trình'], tien_quyet: ['TOAN_L8_DA_THUC'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L8_HAM_SO', mon: 'TOAN', lop: 8, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Hàm số bậc nhất y=ax+b', yeu_cau_can_dat: ['Khái niệm hàm số', 'Hàm số bậc nhất và đồ thị'], tien_quyet: ['TOAN_L8_PHUONG_TRINH'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L8_TU_GIAC', mon: 'TOAN', lop: 8, cap_hoc: 'THCS', mach: 'Hình học và Đo lường', chu_de: 'Tứ giác', yeu_cau_can_dat: ['Các tứ giác đặc biệt', 'Định lí Thalès', 'Đường trung bình', 'Tam giác đồng dạng'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 9
  { id: 'TOAN_L9_HE_PHUONG_TRINH', mon: 'TOAN', lop: 9, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Hệ phương trình bậc nhất hai ẩn', yeu_cau_can_dat: ['Phương trình bậc nhất hai ẩn', 'Hệ hai phương trình bậc nhất hai ẩn', 'Giải hệ bằng phương pháp thế, cộng'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L9_BAT_PHUONG_TRINH', mon: 'TOAN', lop: 9, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Bất phương trình bậc nhất một ẩn', yeu_cau_can_dat: ['Bất đẳng thức', 'Bất phương trình bậc nhất một ẩn'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L9_CAN_BAC_HAI', mon: 'TOAN', lop: 9, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Căn bậc hai, căn bậc ba', yeu_cau_can_dat: ['Căn bậc hai và các phép biến đổi', 'Căn bậc ba'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L9_PHUONG_TRINH_BAC_HAI', mon: 'TOAN', lop: 9, cap_hoc: 'THCS', mach: 'Số và Đại số', chu_de: 'Phương trình bậc hai một ẩn', yeu_cau_can_dat: ['Hàm số y=ax²', 'Phương trình bậc hai một ẩn', 'Công thức nghiệm, hệ thức Viète'], tien_quyet: ['TOAN_L9_CAN_BAC_HAI'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L9_LUONG_GIAC', mon: 'TOAN', lop: 9, cap_hoc: 'THCS', mach: 'Hình học và Đo lường', chu_de: 'Hệ thức lượng trong tam giác vuông', yeu_cau_can_dat: ['Hệ thức giữa cạnh và đường cao', 'Tỉ số lượng giác của góc nhọn'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L9_DUONG_TRON', mon: 'TOAN', lop: 9, cap_hoc: 'THCS', mach: 'Hình học và Đo lường', chu_de: 'Đường tròn', yeu_cau_can_dat: ['Góc với đường tròn', 'Tiếp tuyến', 'Tứ giác nội tiếp', 'Đa giác đều'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 10
  { id: 'TOAN_L10_MENH_DE_TAP_HOP', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Mệnh đề, tập hợp', yeu_cau_can_dat: ['Mệnh đề và các phép toán', 'Tập hợp và các phép toán'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TOAN_L10_BAT_PHUONG_TRINH', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Bất phương trình, hệ bất phương trình', yeu_cau_can_dat: ['Bất phương trình bậc nhất hai ẩn', 'Hệ bất phương trình bậc nhất hai ẩn'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L10_HAM_SO_BAC_HAI', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Hàm số bậc hai', yeu_cau_can_dat: ['Hàm số bậc hai và đồ thị', 'Dấu tam thức bậc hai'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L10_LUONG_GIAC', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Hình học và Đo lường', chu_de: 'Hệ thức lượng trong tam giác', yeu_cau_can_dat: ['Định lí sin, cosin', 'Giải tam giác'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L10_VECTO', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Hình học và Đo lường', chu_de: 'Vectơ', yeu_cau_can_dat: ['Khái niệm vectơ', 'Phép toán vectơ', 'Tích vô hướng'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L10_TOA_DO', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Hình học và Đo lường', chu_de: 'Phương pháp tọa độ trong mặt phẳng', yeu_cau_can_dat: ['Phương trình đường thẳng', 'Phương trình đường tròn', 'Ba đường conic'], tien_quyet: ['TOAN_L10_VECTO'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L10_TO_HOP', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Thống kê và Xác suất', chu_de: 'Đại số tổ hợp', yeu_cau_can_dat: ['Hoán vị, chỉnh hợp, tổ hợp', 'Nhị thức Newton'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L10_XAC_SUAT', mon: 'TOAN', lop: 10, cap_hoc: 'THPT', mach: 'Thống kê và Xác suất', chu_de: 'Thống kê và xác suất', yeu_cau_can_dat: ['Số đặc trưng đo xu thế trung tâm', 'Độ phân tán', 'Xác suất'], tien_quyet: ['TOAN_L10_TO_HOP'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 11
  { id: 'TOAN_L11_HAM_SO_LUONG_GIAC', mon: 'TOAN', lop: 11, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Hàm số lượng giác', yeu_cau_can_dat: ['Hàm số lượng giác', 'Phương trình lượng giác'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L11_DAY_SO', mon: 'TOAN', lop: 11, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Dãy số, cấp số', yeu_cau_can_dat: ['Dãy số', 'Cấp số cộng', 'Cấp số nhân'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L11_GIOI_HAN', mon: 'TOAN', lop: 11, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Giới hạn và liên tục', yeu_cau_can_dat: ['Giới hạn dãy số', 'Giới hạn hàm số', 'Hàm số liên tục'], tien_quyet: ['TOAN_L11_DAY_SO'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L11_DAO_HAM', mon: 'TOAN', lop: 11, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Đạo hàm', yeu_cau_can_dat: ['Định nghĩa đạo hàm', 'Quy tắc tính đạo hàm', 'Đạo hàm hàm hợp'], tien_quyet: ['TOAN_L11_GIOI_HAN'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L11_HAM_MU_LOGARIT', mon: 'TOAN', lop: 11, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Hàm số mũ & logarit', yeu_cau_can_dat: ['Lũy thừa với số mũ thực', 'Hàm số mũ', 'Logarit', 'Hàm số logarit'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L11_HINH_KHONG_GIAN', mon: 'TOAN', lop: 11, cap_hoc: 'THPT', mach: 'Hình học và Đo lường', chu_de: 'Quan hệ song song và vuông góc', yeu_cau_can_dat: ['Đường thẳng và mặt phẳng song song', 'Đường thẳng vuông góc mặt phẳng', 'Hai mặt phẳng vuông góc', 'Góc và khoảng cách'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 12
  { id: 'TOAN_L12_KHAO_SAT_HAM_SO', mon: 'TOAN', lop: 12, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Ứng dụng đạo hàm', yeu_cau_can_dat: ['Khảo sát sự biến thiên hàm số', 'Cực trị, GTLN, GTNN', 'Vẽ đồ thị hàm số'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L12_NGUYEN_HAM_TICH_PHAN', mon: 'TOAN', lop: 12, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Nguyên hàm – Tích phân', yeu_cau_can_dat: ['Nguyên hàm', 'Tích phân', 'Ứng dụng tích phân'], tien_quyet: ['TOAN_L12_KHAO_SAT_HAM_SO'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L12_SO_PHUC', mon: 'TOAN', lop: 12, cap_hoc: 'THPT', mach: 'Số và Đại số', chu_de: 'Số phức', yeu_cau_can_dat: ['Số phức, dạng đại số', 'Phép toán số phức', 'Phương trình bậc hai với số phức'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L12_KHOI_DA_DIEN', mon: 'TOAN', lop: 12, cap_hoc: 'THPT', mach: 'Hình học và Đo lường', chu_de: 'Khối đa diện', yeu_cau_can_dat: ['Khối đa diện', 'Thể tích khối đa diện'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'TOAN_L12_MAT_TRON_XOAY', mon: 'TOAN', lop: 12, cap_hoc: 'THPT', mach: 'Hình học và Đo lường', chu_de: 'Mặt tròn xoay', yeu_cau_can_dat: ['Hình nón, hình trụ, hình cầu', 'Diện tích xung quanh, thể tích'], tien_quyet: ['TOAN_L12_KHOI_DA_DIEN'], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TOAN_L12_TOA_DO_KHONG_GIAN', mon: 'TOAN', lop: 12, cap_hoc: 'THPT', mach: 'Hình học và Đo lường', chu_de: 'Phương pháp tọa độ trong không gian', yeu_cau_can_dat: ['Tọa độ điểm, vectơ', 'Phương trình mặt phẳng', 'Phương trình đường thẳng', 'Mặt cầu'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
];

// ============ NGỮ VĂN / TIẾNG VIỆT ============
export const NGU_VAN_CURRICULUM: CurriculumStandard[] = [
  // Lớp 1 (Tiếng Việt)
  { id: 'TV_L1_HOC_VAN', mon: 'NGU_VAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Đọc', chu_de: 'Học vần', yeu_cau_can_dat: ['Nhận biết âm, vần, thanh', 'Ghép tiếng', 'Đọc trơn từ, câu, đoạn ngắn'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L1_VIET', mon: 'NGU_VAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Viết', chu_de: 'Viết chữ', yeu_cau_can_dat: ['Tô, viết chữ cái', 'Viết vần, từ', 'Chính tả nhìn viết'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L1_DOC_HIEU', mon: 'NGU_VAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Đọc', chu_de: 'Đọc hiểu', yeu_cau_can_dat: ['Đọc hiểu câu chuyện, bài thơ ngắn', 'Trả lời câu hỏi đơn giản'], tien_quyet: ['TV_L1_HOC_VAN'], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L1_NOI_NGHE', mon: 'NGU_VAN', lop: 1, cap_hoc: 'TIEU_HOC', mach: 'Nói và Nghe', chu_de: 'Nói - Nghe', yeu_cau_can_dat: ['Nói theo chủ đề quen thuộc', 'Nghe hiểu yêu cầu đơn giản'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },

  // Lớp 2
  { id: 'TV_L2_DOC_THANH_TIENG', mon: 'NGU_VAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Đọc', chu_de: 'Đọc thành tiếng', yeu_cau_can_dat: ['Đọc rõ ràng, lưu loát', 'Ngắt nghỉ đúng dấu câu'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L2_DOC_HIEU', mon: 'NGU_VAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Đọc', chu_de: 'Đọc hiểu văn bản', yeu_cau_can_dat: ['Đọc hiểu truyện, thơ, văn bản thông tin', 'Trả lời câu hỏi về nội dung'], tien_quyet: ['TV_L2_DOC_THANH_TIENG'], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L2_TU_CAU', mon: 'NGU_VAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ và câu', yeu_cau_can_dat: ['Từ chỉ sự vật, hoạt động, đặc điểm', 'Câu kiểu Ai là gì, Ai làm gì, Ai thế nào'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L2_VIET', mon: 'NGU_VAN', lop: 2, cap_hoc: 'TIEU_HOC', mach: 'Viết', chu_de: 'Viết câu, đoạn văn', yeu_cau_can_dat: ['Chính tả nghe viết', 'Viết câu hoàn chỉnh', 'Viết đoạn 3-4 câu'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 3
  { id: 'TV_L3_DOC_HIEU', mon: 'NGU_VAN', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Đọc', chu_de: 'Đọc hiểu nâng cao', yeu_cau_can_dat: ['Đọc hiểu chi tiết, ý chính', 'Nhận biết thái độ của tác giả', 'Mở rộng vốn từ theo chủ điểm'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TV_L3_CAU', mon: 'NGU_VAN', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Kiến thức tiếng Việt', chu_de: 'Câu và dấu câu', yeu_cau_can_dat: ['Thành phần chính của câu', 'Dấu câu', 'Biện pháp so sánh'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L3_VIET', mon: 'NGU_VAN', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Viết', chu_de: 'Viết đoạn văn', yeu_cau_can_dat: ['Viết đoạn văn kể, tả, nêu cảm xúc', 'Viết thư, đơn đơn giản'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung'] },

  // Lớp 4
  { id: 'TV_L4_DOC_HIEU', mon: 'NGU_VAN', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Đọc', chu_de: 'Đọc hiểu văn bản đa dạng', yeu_cau_can_dat: ['Đọc hiểu chủ đề, nhân vật, chi tiết tiêu biểu', 'Nhận diện các loại văn bản'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TV_L4_TU_LOAI', mon: 'NGU_VAN', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ loại, tu từ', yeu_cau_can_dat: ['Danh từ, động từ, tính từ', 'Câu đơn, câu ghép', 'So sánh, nhân hóa'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L4_VIET_VAN', mon: 'NGU_VAN', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Viết', chu_de: 'Viết bài văn', yeu_cau_can_dat: ['Kể chuyện', 'Miêu tả cây cối, con vật', 'Viết thư'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung'] },

  // Lớp 5
  { id: 'TV_L5_DOC_HIEU', mon: 'NGU_VAN', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Đọc', chu_de: 'Đọc hiểu nâng cao', yeu_cau_can_dat: ['Đọc hiểu chủ đề, ý nghĩa', 'Liên hệ bản thân'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'TV_L5_TU_LOAI_CAU', mon: 'NGU_VAN', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ loại, câu ghép', yeu_cau_can_dat: ['Các loại từ', 'Câu ghép', 'Liên kết câu', 'Điệp từ, đảo ngữ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'TV_L5_VIET_VAN', mon: 'NGU_VAN', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Viết', chu_de: 'Viết bài văn hoàn chỉnh', yeu_cau_can_dat: ['Tả người, tả cảnh', 'Kể chuyện sáng tạo', 'Văn nghị luận đơn giản'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 6
  { id: 'NV_L6_TRUYEN', mon: 'NGU_VAN', lop: 6, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Truyện', yeu_cau_can_dat: ['Đọc hiểu truyền thuyết, cổ tích, đồng thoại', 'Nhận diện đặc điểm thể loại'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L6_THO', mon: 'NGU_VAN', lop: 6, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Thơ', yeu_cau_can_dat: ['Đọc hiểu thơ lục bát', 'Nhận diện vần, nhịp, hình ảnh'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L6_HOI_KI', mon: 'NGU_VAN', lop: 6, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Hồi kí, du kí', yeu_cau_can_dat: ['Đọc hiểu hồi kí, du kí', 'Nhận diện đặc điểm thể loại'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L6_TIENG_VIET', mon: 'NGU_VAN', lop: 6, cap_hoc: 'THCS', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ và câu', yeu_cau_can_dat: ['Từ đơn, từ phức', 'Nghĩa của từ', 'Ẩn dụ, hoán dụ', 'Trạng ngữ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L6_VIET', mon: 'NGU_VAN', lop: 6, cap_hoc: 'THCS', mach: 'Viết', chu_de: 'Viết văn bản', yeu_cau_can_dat: ['Kể lại trải nghiệm', 'Kể lại truyện', 'Tả cảnh sinh hoạt', 'Viết biên bản'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung'] },

  // Lớp 7
  { id: 'NV_L7_TRUYEN', mon: 'NGU_VAN', lop: 7, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Truyện ngụ ngôn, tục ngữ', yeu_cau_can_dat: ['Đọc hiểu truyện ngụ ngôn', 'Hiểu tục ngữ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L7_THO', mon: 'NGU_VAN', lop: 7, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Thơ bốn, năm chữ', yeu_cau_can_dat: ['Đọc hiểu thơ bốn, năm chữ', 'Nhận diện đặc điểm thể thơ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L7_TUY_BUT', mon: 'NGU_VAN', lop: 7, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Tùy bút, tản văn', yeu_cau_can_dat: ['Đọc hiểu tùy bút, tản văn', 'Nhận diện đặc điểm thể loại'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L7_TIENG_VIET', mon: 'NGU_VAN', lop: 7, cap_hoc: 'THCS', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ vựng, tu từ', yeu_cau_can_dat: ['Số từ, phó từ', 'Thành ngữ', 'Nói quá, nói giảm', 'Mạch lạc, liên kết'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L7_VIET', mon: 'NGU_VAN', lop: 7, cap_hoc: 'THCS', mach: 'Viết', chu_de: 'Viết văn bản', yeu_cau_can_dat: ['Kể lại sự việc', 'Biểu cảm về con người/sự việc', 'Nghị luận về vấn đề đời sống', 'Phân tích nhân vật'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 8
  { id: 'NV_L8_TRUYEN', mon: 'NGU_VAN', lop: 8, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Truyện cười, truyện lịch sử', yeu_cau_can_dat: ['Đọc hiểu truyện cười', 'Đọc hiểu truyện lịch sử'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L8_THO', mon: 'NGU_VAN', lop: 8, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Thơ Đường luật', yeu_cau_can_dat: ['Đọc hiểu thơ Đường luật', 'Nhận diện niêm, luật, vần, đối'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L8_HAI_KICH', mon: 'NGU_VAN', lop: 8, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Hài kịch', yeu_cau_can_dat: ['Đọc hiểu hài kịch', 'Nhận diện xung đột, nhân vật'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L8_TIENG_VIET', mon: 'NGU_VAN', lop: 8, cap_hoc: 'THCS', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ Hán Việt, câu', yeu_cau_can_dat: ['Từ Hán Việt, biệt ngữ', 'Câu khẳng định/phủ định', 'Đoạn văn diễn dịch/quy nạp'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L8_VIET', mon: 'NGU_VAN', lop: 8, cap_hoc: 'THCS', mach: 'Viết', chu_de: 'Viết văn bản', yeu_cau_can_dat: ['Nghị luận về vấn đề đời sống', 'Phân tích tác phẩm văn học', 'Thuyết minh giải thích hiện tượng'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 9
  { id: 'NV_L9_TRUYEN', mon: 'NGU_VAN', lop: 9, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Truyện thơ Nôm, truyện hiện đại', yeu_cau_can_dat: ['Đọc hiểu truyện thơ Nôm', 'Đọc hiểu truyện hiện đại'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'NV_L9_THO', mon: 'NGU_VAN', lop: 9, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Thơ tám chữ', yeu_cau_can_dat: ['Đọc hiểu thơ tám chữ', 'Nhận diện đặc điểm thể thơ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L9_BI_KICH', mon: 'NGU_VAN', lop: 9, cap_hoc: 'THCS', mach: 'Đọc', chu_de: 'Bi kịch', yeu_cau_can_dat: ['Đọc hiểu bi kịch', 'Nhận diện xung đột bi kịch'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L9_TIENG_VIET', mon: 'NGU_VAN', lop: 9, cap_hoc: 'THCS', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ vựng nâng cao, câu', yeu_cau_can_dat: ['Điển tích, điển cố', 'Nghĩa tường minh, hàm ý', 'Biến đổi, mở rộng cấu trúc câu'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L9_VIET', mon: 'NGU_VAN', lop: 9, cap_hoc: 'THCS', mach: 'Viết', chu_de: 'Viết văn bản', yeu_cau_can_dat: ['Nghị luận xã hội', 'Nghị luận văn học', 'Truyện kể sáng tạo'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 10
  { id: 'NV_L10_TRUYEN', mon: 'NGU_VAN', lop: 10, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Thần thoại, sử thi', yeu_cau_can_dat: ['Đọc hiểu thần thoại, sử thi', 'Nhận diện đặc điểm thể loại'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L10_KICH', mon: 'NGU_VAN', lop: 10, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Chèo, tuồng', yeu_cau_can_dat: ['Đọc hiểu chèo, tuồng', 'Nhận diện đặc điểm sân khấu truyền thống'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L10_THO', mon: 'NGU_VAN', lop: 10, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Thơ', yeu_cau_can_dat: ['Đọc hiểu thơ', 'Phân tích hình ảnh, biện pháp tu từ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L10_TIENG_VIET', mon: 'NGU_VAN', lop: 10, cap_hoc: 'THPT', mach: 'Kiến thức tiếng Việt', chu_de: 'Từ vựng, tu từ', yeu_cau_can_dat: ['Lỗi dùng từ, trật tự từ', 'Liệt kê, chêm xen', 'Phương tiện phi ngôn ngữ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L10_VIET', mon: 'NGU_VAN', lop: 10, cap_hoc: 'THPT', mach: 'Viết', chu_de: 'Viết văn bản', yeu_cau_can_dat: ['Nghị luận phân tích tác phẩm', 'Nghị luận vấn đề xã hội', 'Bài luận thuyết phục'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 11
  { id: 'NV_L11_TRUYEN', mon: 'NGU_VAN', lop: 11, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Truyện ngắn, tiểu thuyết hiện đại', yeu_cau_can_dat: ['Đọc hiểu truyện ngắn, tiểu thuyết hiện đại', 'Phân tích nhân vật, tình huống'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'NV_L11_THO', mon: 'NGU_VAN', lop: 11, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Thơ trữ tình', yeu_cau_can_dat: ['Đọc hiểu thơ trữ tình', 'Phân tích hình ảnh, cảm xúc'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L11_KICH', mon: 'NGU_VAN', lop: 11, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Truyện thơ, bi kịch', yeu_cau_can_dat: ['Đọc hiểu truyện thơ, bi kịch', 'Nhận diện xung đột, nhân vật'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L11_TIENG_VIET', mon: 'NGU_VAN', lop: 11, cap_hoc: 'THPT', mach: 'Kiến thức tiếng Việt', chu_de: 'Ngôn ngữ nâng cao', yeu_cau_can_dat: ['Ngôn ngữ nói, viết', 'Phá vỡ quy tắc ngôn ngữ', 'Giải thích nghĩa từ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L11_VIET', mon: 'NGU_VAN', lop: 11, cap_hoc: 'THPT', mach: 'Viết', chu_de: 'Viết văn bản', yeu_cau_can_dat: ['Nghị luận về tác phẩm thơ/truyện/kịch', 'Nghị luận xã hội', 'Báo cáo nghiên cứu'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 12
  { id: 'NV_L12_TRUYEN', mon: 'NGU_VAN', lop: 12, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Tiểu thuyết, truyện hiện đại/hậu hiện đại', yeu_cau_can_dat: ['Đọc hiểu tiểu thuyết, truyện hiện đại/hậu hiện đại', 'Phân tích kỹ thuật kể chuyện'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'NV_L12_THO', mon: 'NGU_VAN', lop: 12, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Thơ', yeu_cau_can_dat: ['Đọc hiểu thơ', 'Phân tích phong cách, thi pháp'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L12_KICH', mon: 'NGU_VAN', lop: 12, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Hài kịch', yeu_cau_can_dat: ['Đọc hiểu hài kịch', 'Nhận diện xung đột, tính cách nhân vật'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L12_KI', mon: 'NGU_VAN', lop: 12, cap_hoc: 'THPT', mach: 'Đọc', chu_de: 'Phóng sự, nhật kí', yeu_cau_can_dat: ['Đọc hiểu phóng sự, nhật kí', 'Nhận diện đặc điểm thể loại'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'NV_L12_TIENG_VIET', mon: 'NGU_VAN', lop: 12, cap_hoc: 'THPT', mach: 'Kiến thức tiếng Việt', chu_de: 'Trong sáng tiếng Việt, tu từ', yeu_cau_can_dat: ['Giữ gìn sự trong sáng tiếng Việt', 'Nghịch ngữ', 'Lỗi logic, câu, đoạn'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'NV_L12_VIET', mon: 'NGU_VAN', lop: 12, cap_hoc: 'THPT', mach: 'Viết', chu_de: 'Viết văn bản', yeu_cau_can_dat: ['Nghị luận so sánh, đánh giá tác phẩm', 'Nghị luận vấn đề có nhiều ý kiến', 'Bài phát biểu, thư trao đổi công việc'], tien_quyet: [], muc_do_goi_y: ['thong_hieu', 'van_dung', 'van_dung_cao'] },
];

// ============ TIẾNG ANH ============
export const TIENG_ANH_CURRICULUM: CurriculumStandard[] = [
  // Lớp 3
  { id: 'ENG_L3_GREETINGS', mon: 'TIENG_ANH', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Communication', chu_de: 'Greetings & Introductions', yeu_cau_can_dat: ['Chào hỏi cơ bản', 'Giới thiệu bản thân', 'Hỏi/trả lời tên, tuổi'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L3_FAMILY', mon: 'TIENG_ANH', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'My Family', yeu_cau_can_dat: ['Từ vựng thành viên gia đình', 'Mô tả gia đình đơn giản'], tien_quyet: ['ENG_L3_GREETINGS'], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L3_SCHOOL', mon: 'TIENG_ANH', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'My School', yeu_cau_can_dat: ['Từ vựng đồ dùng học tập', 'Mô tả lớp học, trường học'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L3_NUMBERS', mon: 'TIENG_ANH', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'Numbers & Colors', yeu_cau_can_dat: ['Số đếm 1-20', 'Màu sắc cơ bản'], tien_quyet: [], muc_do_goi_y: ['nhan_biet'] },
  { id: 'ENG_L3_ANIMALS', mon: 'TIENG_ANH', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'Animals', yeu_cau_can_dat: ['Từ vựng động vật', 'Mô tả động vật đơn giản'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L3_GRAMMAR', mon: 'TIENG_ANH', lop: 3, cap_hoc: 'TIEU_HOC', mach: 'Grammar', chu_de: 'To be, This/That', yeu_cau_can_dat: ['Động từ to be', 'This/That/These/Those'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },

  // Lớp 4
  { id: 'ENG_L4_DAILY', mon: 'TIENG_ANH', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Communication', chu_de: 'Daily Activities', yeu_cau_can_dat: ['Mô tả hoạt động hàng ngày', 'Hỏi/trả lời về thời gian'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L4_FOOD', mon: 'TIENG_ANH', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'Food & Drink', yeu_cau_can_dat: ['Từ vựng đồ ăn, thức uống', 'Hỏi/trả lời về sở thích ăn uống'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L4_WEATHER', mon: 'TIENG_ANH', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'Weather & Seasons', yeu_cau_can_dat: ['Từ vựng thời tiết, mùa', 'Mô tả thời tiết'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L4_GRAMMAR', mon: 'TIENG_ANH', lop: 4, cap_hoc: 'TIEU_HOC', mach: 'Grammar', chu_de: 'Present Simple, Have got', yeu_cau_can_dat: ['Thì hiện tại đơn', 'Have got/Has got'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 5
  { id: 'ENG_L5_HOBBIES', mon: 'TIENG_ANH', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Communication', chu_de: 'Hobbies & Activities', yeu_cau_can_dat: ['Nói về sở thích', 'Mô tả các hoạt động'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L5_PLACES', mon: 'TIENG_ANH', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'Places & Directions', yeu_cau_can_dat: ['Từ vựng địa điểm', 'Hỏi/chỉ đường'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L5_HEALTH', mon: 'TIENG_ANH', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Vocabulary', chu_de: 'Body & Health', yeu_cau_can_dat: ['Các bộ phận cơ thể', 'Nói về sức khỏe'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L5_GRAMMAR', mon: 'TIENG_ANH', lop: 5, cap_hoc: 'TIEU_HOC', mach: 'Grammar', chu_de: 'Present Continuous, Can, Comparatives', yeu_cau_can_dat: ['Thì hiện tại tiếp diễn', 'Can/Can\'t', 'So sánh hơn cơ bản'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 6
  { id: 'ENG_L6_SCHOOL', mon: 'TIENG_ANH', lop: 6, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'My New School', yeu_cau_can_dat: ['Mô tả trường học mới', 'Các môn học, hoạt động'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L6_HOME', mon: 'TIENG_ANH', lop: 6, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'My Home', yeu_cau_can_dat: ['Mô tả nhà, phòng', 'Đồ dùng trong nhà'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu'] },
  { id: 'ENG_L6_FESTIVALS', mon: 'TIENG_ANH', lop: 6, cap_hoc: 'THCS', mach: 'Culture', chu_de: 'Festivals & Community', yeu_cau_can_dat: ['Lễ hội Việt Nam, thế giới', 'Hoạt động cộng đồng'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L6_GRAMMAR', mon: 'TIENG_ANH', lop: 6, cap_hoc: 'THCS', mach: 'Grammar', chu_de: 'Present Simple/Continuous, Past Simple', yeu_cau_can_dat: ['Thì hiện tại đơn/tiếp diễn', 'Thì quá khứ đơn', 'Comparatives/Superlatives'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 7
  { id: 'ENG_L7_TRAFFIC', mon: 'TIENG_ANH', lop: 7, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Traffic & Environment', yeu_cau_can_dat: ['Phương tiện giao thông', 'An toàn giao thông', 'Bảo vệ môi trường'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L7_MEDIA', mon: 'TIENG_ANH', lop: 7, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Television & Media', yeu_cau_can_dat: ['Các loại chương trình TV', 'Ưu/nhược điểm của media'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L7_FILMS', mon: 'TIENG_ANH', lop: 7, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Films & Entertainment', yeu_cau_can_dat: ['Các thể loại phim', 'Đánh giá, nhận xét phim'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L7_GRAMMAR', mon: 'TIENG_ANH', lop: 7, cap_hoc: 'THCS', mach: 'Grammar', chu_de: 'Past Simple, Present Perfect, Future', yeu_cau_can_dat: ['Thì quá khứ đơn', 'Present Perfect (intro)', 'Will/Be going to', 'Too/Either'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },

  // Lớp 8
  { id: 'ENG_L8_RECYCLING', mon: 'TIENG_ANH', lop: 8, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Recycling & Environment', yeu_cau_can_dat: ['Tái chế, bảo vệ môi trường', 'Đưa ra giải pháp'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L8_ENERGY', mon: 'TIENG_ANH', lop: 8, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Energy Sources', yeu_cau_can_dat: ['Các nguồn năng lượng', 'Năng lượng tái tạo'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L8_LIFESTYLES', mon: 'TIENG_ANH', lop: 8, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Lifestyles', yeu_cau_can_dat: ['Lối sống khác nhau', 'So sánh lối sống'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L8_GRAMMAR', mon: 'TIENG_ANH', lop: 8, cap_hoc: 'THCS', mach: 'Grammar', chu_de: 'Present Perfect, Passive, Reported Speech', yeu_cau_can_dat: ['Present Perfect', 'Past Continuous', 'Passive (intro)', 'Reported Speech (intro)', 'Conditional Type 1'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 9
  { id: 'ENG_L9_CAREER', mon: 'TIENG_ANH', lop: 9, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Career & Future Jobs', yeu_cau_can_dat: ['Nghề nghiệp', 'Kế hoạch tương lai'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L9_GLOBAL', mon: 'TIENG_ANH', lop: 9, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Global Issues', yeu_cau_can_dat: ['Biến đổi khí hậu', 'Vấn đề toàn cầu'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'ENG_L9_TOURISM', mon: 'TIENG_ANH', lop: 9, cap_hoc: 'THCS', mach: 'Communication', chu_de: 'Tourism & English-speaking Countries', yeu_cau_can_dat: ['Du lịch', 'Các nước nói tiếng Anh'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L9_GRAMMAR', mon: 'TIENG_ANH', lop: 9, cap_hoc: 'THCS', mach: 'Grammar', chu_de: 'Advanced Grammar', yeu_cau_can_dat: ['Present Perfect Continuous', 'Passive Voice', 'Reported Speech', 'Relative Clauses', 'Conditionals 1&2', 'Wishes'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 10
  { id: 'ENG_L10_FAMILY', mon: 'TIENG_ANH', lop: 10, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Family Life', yeu_cau_can_dat: ['Cuộc sống gia đình', 'Các thế hệ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L10_ENVIRONMENT', mon: 'TIENG_ANH', lop: 10, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Humans & Environment', yeu_cau_can_dat: ['Tác động con người đến môi trường', 'Giải pháp bảo vệ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'ENG_L10_INVENTIONS', mon: 'TIENG_ANH', lop: 10, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Inventions', yeu_cau_can_dat: ['Các phát minh', 'Ảnh hưởng đến cuộc sống'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L10_GRAMMAR', mon: 'TIENG_ANH', lop: 10, cap_hoc: 'THPT', mach: 'Grammar', chu_de: 'Tenses, Passive, Conditionals', yeu_cau_can_dat: ['Ôn tập các thì', 'Passive Voice', 'Conditionals', 'To-infinitive/Gerund', 'Relative Clauses'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 11
  { id: 'ENG_L11_GENDER', mon: 'TIENG_ANH', lop: 11, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Gender Equality', yeu_cau_can_dat: ['Bình đẳng giới', 'Quyền phụ nữ'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'ENG_L11_CULTURE', mon: 'TIENG_ANH', lop: 11, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Cultural Diversity', yeu_cau_can_dat: ['Đa dạng văn hóa', 'Tôn trọng sự khác biệt'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L11_LEARNING', mon: 'TIENG_ANH', lop: 11, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'New Ways to Learn', yeu_cau_can_dat: ['Công nghệ trong giáo dục', 'Học trực tuyến'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L11_GRAMMAR', mon: 'TIENG_ANH', lop: 11, cap_hoc: 'THPT', mach: 'Grammar', chu_de: 'Advanced Grammar', yeu_cau_can_dat: ['Perfect Tenses', 'Passive (advanced)', 'Reported Speech', 'Cleft Sentences (intro)', 'Conditionals 1-3', 'Modals'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },

  // Lớp 12
  { id: 'ENG_L12_AI', mon: 'TIENG_ANH', lop: 12, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Artificial Intelligence', yeu_cau_can_dat: ['Trí tuệ nhân tạo', 'Ứng dụng và thách thức'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'ENG_L12_CAREER', mon: 'TIENG_ANH', lop: 12, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Career Choices', yeu_cau_can_dat: ['Lựa chọn nghề nghiệp', 'Phỏng vấn xin việc'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
  { id: 'ENG_L12_GREEN', mon: 'TIENG_ANH', lop: 12, cap_hoc: 'THPT', mach: 'Communication', chu_de: 'Green Movement & Ecotourism', yeu_cau_can_dat: ['Phong trào xanh', 'Du lịch sinh thái'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung'] },
  { id: 'ENG_L12_GRAMMAR', mon: 'TIENG_ANH', lop: 12, cap_hoc: 'THPT', mach: 'Grammar', chu_de: 'Advanced Grammar', yeu_cau_can_dat: ['All Conditionals', 'Mixed Conditionals', 'Cleft Sentences', 'Inversion', 'Passive (advanced)', 'Modals in the Past'], tien_quyet: [], muc_do_goi_y: ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] },
];

// Combined curriculum data
export const ALL_CURRICULUM: CurriculumStandard[] = [
  ...TOAN_CURRICULUM,
  ...NGU_VAN_CURRICULUM,
  ...TIENG_ANH_CURRICULUM,
];

// Helper functions
export function getCurriculumByGradeSubject(lop: number, mon: 'TOAN' | 'NGU_VAN' | 'TIENG_ANH'): CurriculumStandard[] {
  return ALL_CURRICULUM.filter(c => c.lop === lop && c.mon === mon);
}

export function getCurriculumById(id: string): CurriculumStandard | undefined {
  return ALL_CURRICULUM.find(c => c.id === id);
}

export function getTopicsByMach(lop: number, mon: 'TOAN' | 'NGU_VAN' | 'TIENG_ANH'): Record<string, CurriculumStandard[]> {
  const topics = getCurriculumByGradeSubject(lop, mon);
  return topics.reduce((acc, topic) => {
    if (!acc[topic.mach]) {
      acc[topic.mach] = [];
    }
    acc[topic.mach].push(topic);
    return acc;
  }, {} as Record<string, CurriculumStandard[]>);
}

export const CANH_DIEU_TOAN_6_TIMELINE: TimelineWeek[] = [
  { tuan: 1, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 1: Tập hợp (2 tiết)', 'Bài 2: Tập hợp các số tự nhiên (3 tiết - Tiết 1, 2)'], is_kiem_tra: false },
  { tuan: 2, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 2: Tập hợp các số tự nhiên (Tiết 3)', 'Bài 3: Phép cộng, phép trừ các số tự nhiên (2 tiết)', 'Bài 4: Phép nhân và phép chia số tự nhiên (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 3, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 4: Phép nhân và phép chia số tự nhiên (Tiết 2)', 'Bài 5: Phép tính lũy thừa với số mũ tự nhiên (3 tiết)', 'Bài 6: Thứ tự thực hiện các phép tính (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 4, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 6: Thứ tự thực hiện các phép tính (Tiết 2)', 'Bài 7: Quan hệ chia hết. Tính chất chia hết (4 tiết - Tiết 1, 2)'], is_kiem_tra: false },
  { tuan: 5, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 7: Quan hệ chia hết. Tính chất chia hết (Tiết 3, 4)', 'Bài 8: Dấu hiệu chia hết cho 2 và 5 (1 tiết)', 'Bài 9: Dấu hiệu chia hết cho 3 và 9 (1 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 6, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 9: Dấu hiệu chia hết cho 3 và 9 (Tiết 2)', 'Bài 10: Số nguyên tố - Hợp số (2 tiết)', 'Bài 11: Phân tích một số ra thừa số nguyên tố (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 7, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 11: Phân tích một số ra thừa số nguyên tố (Tiết 2)', 'Bài 12: Ưước chung và ước chung lớn nhất (3 tiết)', 'Bài 13: Bội chung và bội chung nhỏ nhất (3 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 8, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 13: Bội chung và bội chung nhỏ nhất (Tiết 2, 3)', 'Bài tập cuối chương I (2 tiết)'], is_kiem_tra: false },
  { tuan: 9, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Ôn tập giữa học kỳ 1 (2 tiết)', 'Kiểm tra giữa học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_1' },
  { tuan: 10, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Chương II - Bài 1: Số nguyên âm (1 tiết)', 'Chương II - Bài 2: Tập hợp các số nguyên (3 tiết - Tiết 1, 2)'], is_kiem_tra: false },
  { tuan: 11, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Chương II - Bài 2: Tập hợp các số nguyên (Tiết 3)', 'Chương II - Bài 3: Phép cộng các số nguyên (3 tiết)', 'Chương II - Bài 4: Phép trừ số nguyên, quy tắc dấu ngoặc (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 12, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Chương II - Bài 4: Phép trừ số nguyên, quy tắc dấu ngoặc (Tiết 2)', 'Chương II - Bài 5: Phép nhân các số nguyên (2 tiết)', 'Chương II - Bài 6: Phép chia hết hai số nguyên. Quan hệ chia hết (3 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 13, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Chương II - Bài 6: Phép chia hết hai số nguyên (Tiết 2, 3)', 'Bài tập cuối chương II (2 tiết)'], is_kiem_tra: false },
  { tuan: 14, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Chương III - Bài 1: Tam giác đều. Hình vuông. Lục giác đều (3 tiết)', 'Chương III - Bài 2: Hình chữ nhật. Hình thoi (3 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 15, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Chương III - Bài 2: Hình chữ nhật. Hình thoi (Tiết 2, 3)', 'Chương III - Bài 3: Hình bình hành (3 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 16, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Chương III - Bài 3: Hình bình hành (Tiết 2, 3)', 'Chương III - Bài 4: Hình thang cân (3 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 17, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Chương III - Bài 4: Hình thang cân (Tiết 2, 3)', 'Chương III - Bài 5: Hình có trục đối xứng (2 tiết)', 'Chương III - Bài 6: Hình có tâm đối xứng (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 18, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Chương III - Bài 6: Hình có tâm đối xứng (Tiết 2)', 'Chương III - Bài 7: Đối xứng trong thực tiễn (2 tiết)', 'Bài tập cuối chương III (2 tiết)', 'Ôn tập cuối học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_1' },
  // Học kỳ 2
  { tuan: 19, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Chương V - Bài 1: Phân số với tử và mẫu là số nguyên (3 tiết)'], is_kiem_tra: false },
  { tuan: 20, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Chương V - Bài 2: So sánh phân số. Hỗn số dương (3 tiết)'], is_kiem_tra: false },
  { tuan: 21, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Chương V - Bài 3: Phép cộng và phép trừ phân số (4 tiết)'], is_kiem_tra: false },
  { tuan: 22, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Chương V - Bài 4: Phép nhân và phép chia phân số (4 tiết)'], is_kiem_tra: false },
  { tuan: 23, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Chương V - Bài 5: Số thập phân (3 tiết)'], is_kiem_tra: false },
  { tuan: 24, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Chương V - Bài 6: Phép tính cộng, trừ, nhân, chia số thập phân (4 tiết)'], is_kiem_tra: false },
  { tuan: 25, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Chương V - Bài 7: Tỉ số và tỉ số phần trăm (4 tiết)'], is_kiem_tra: false },
  { tuan: 26, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài tập cuối chương V (2 tiết)'], is_kiem_tra: false },
  { tuan: 27, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Ôn tập giữa học kỳ 2 (2 tiết)', 'Kiểm tra giữa học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_2' },
  { tuan: 28, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Chương VI - Bài 1: Điểm. Đường thẳng (3 tiết)'], is_kiem_tra: false },
  { tuan: 29, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Chương VI - Bài 2: Tia. Đoạn thẳng. Độ dài đoạn thẳng (4 tiết)'], is_kiem_tra: false },
  { tuan: 30, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Chương VI - Bài 3: Trung điểm của đoạn thẳng. Góc (4 tiết)'], is_kiem_tra: false },
  { tuan: 31, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài tập cuối chương VI (2 tiết)'], is_kiem_tra: false },
  { tuan: 32, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Chương IV - Bài 1: Thu thập, phân loại, biểu diễn dữ liệu (3 tiết)'], is_kiem_tra: false },
  { tuan: 33, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Chương IV - Bài 2: Biểu đồ cột đơn, biểu đồ cột kép (4 tiết)'], is_kiem_tra: false },
  { tuan: 34, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Chương IV - Bài 3: Mô hình xác suất và xác suất thực nghiệm (3 tiết)'], is_kiem_tra: false },
  { tuan: 35, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG', 'TOAN_L6_THONG_KE'], ten_bai: ['Ôn tập cuối học kỳ 2 (2 tiết)', 'Kiểm tra cuối học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_2' },
];

export const KET_NOI_TOAN_6_TIMELINE: TimelineWeek[] = [
  // Học kỳ 1
  { tuan: 1, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 1: Tập hợp (1 tiết)', 'Bài 2: Cách ghi số tự nhiên (1 tiết)'], is_kiem_tra: false },
  { tuan: 2, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 3: Thứ tự trong tập hợp các số tự nhiên (1 tiết)', 'Bài 4: Phép cộng và phép trừ số tự nhiên (1 tiết)'], is_kiem_tra: false },
  { tuan: 3, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 5: Phép nhân và phép chia số tự nhiên (2 tiết)'], is_kiem_tra: false },
  { tuan: 4, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 6: Lũy thừa với số mũ tự nhiên (2 tiết)'], is_kiem_tra: false },
  { tuan: 5, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 7: Thứ tự thực hiện các phép tính (1 tiết)', 'Bài 8: Quan hệ chia hết và tính chất (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 6, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 8: Quan hệ chia hết và tính chất (Tiết 2)', 'Bài 9: Dấu hiệu chia hết (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 7, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 9: Dấu hiệu chia hết (Tiết 2)', 'Bài 10: Số nguyên tố (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 8, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 10: Số nguyên tố (Tiết 2)', 'Bài 11: Ước chung, ước chung lớn nhất (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 9, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Ôn tập giữa học kỳ 1 (2 tiết)', 'Kiểm tra giữa học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_1' },
  { tuan: 10, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 11: Ước chung, ước chung lớn nhất (Tiết 2)', 'Bài 12: Bội chung, bội chung nhỏ nhất (2 tiết)'], is_kiem_tra: false },
  { tuan: 11, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 13: Tập hợp các số nguyên (2 tiết)', 'Bài 14: Phép cộng và phép trừ số nguyên (3 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 12, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 14: Phép cộng và phép trừ số nguyên (Tiết 2, 3)', 'Bài 15: Quy tắc dấu ngoặc (1 tiết)'], is_kiem_tra: false },
  { tuan: 13, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 16: Phép nhân số nguyên (2 tiết)', 'Bài 17: Phép chia hết. Ước và bội của một số nguyên (1 tiết)'], is_kiem_tra: false },
  { tuan: 14, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Bài 18: Hình tam giác đều. Hình vuông. Hình lục giác đều (3 tiết)'], is_kiem_tra: false },
  { tuan: 15, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân (3 tiết)'], is_kiem_tra: false },
  { tuan: 16, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Bài 20: Chu vi và diện tích của một số tứ giác đã học (3 tiết)'], is_kiem_tra: false },
  { tuan: 17, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Bài 21: Hình có trục đối xứng (2 tiết)', 'Bài 22: Hình có tâm đối xứng (2 tiết)'], is_kiem_tra: false },
  { tuan: 18, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN', 'TOAN_L6_SO_NGUYEN'], ten_bai: ['Ôn tập cuối học kỳ 1 (2 tiết)', 'Kiểm tra cuối học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_1' },
  // Học kỳ 2
  { tuan: 19, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 23: Mở rộng phân số. Phân số bằng nhau (3 tiết)'], is_kiem_tra: false },
  { tuan: 20, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 24: So sánh hai phân số. Hỗn số dương (3 tiết)'], is_kiem_tra: false },
  { tuan: 21, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 25: Phép cộng và phép trừ phân số (4 tiết)'], is_kiem_tra: false },
  { tuan: 22, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 26: Phép nhân và phép chia phân số (4 tiết)'], is_kiem_tra: false },
  { tuan: 23, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 27: Hai bài toán về phân số (4 tiết)'], is_kiem_tra: false },
  { tuan: 24, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 28: Số thập phân (3 tiết)'], is_kiem_tra: false },
  { tuan: 25, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 29: Tính toán với số thập phân (4 tiết)'], is_kiem_tra: false },
  { tuan: 26, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 30: Làm tròn và ước lượng (2 tiết)', 'Bài 31: Một số bài toán về tỉ số phần trăm (4 tiết)'], is_kiem_tra: false },
  { tuan: 27, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Ôn tập giữa học kỳ 2 (2 tiết)', 'Kiểm tra giữa học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_2' },
  { tuan: 28, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 32: Điểm và đường thẳng (3 tiết)'], is_kiem_tra: false },
  { tuan: 29, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 33: Điểm nằm giữa hai điểm. Tia (3 tiết)', 'Bài 34: Đoạn thẳng. Độ dài đoạn thẳng (3 tiết)'], is_kiem_tra: false },
  { tuan: 30, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 35: Trung điểm của đoạn thẳng (3 tiết)', 'Bài 36: Góc (2 tiết)'], is_kiem_tra: false },
  { tuan: 31, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 37: Số đo góc (3 tiết)'], is_kiem_tra: false },
  { tuan: 32, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Bài 38: Dữ liệu và thu thập dữ liệu (3 tiết)'], is_kiem_tra: false },
  { tuan: 33, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Bài 39: Bảng thống kê và biểu đồ tranh (3 tiết)', 'Bài 40: Biểu đồ cột (3 tiết)'], is_kiem_tra: false },
  { tuan: 34, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Bài 41: Biểu đồ cột kép (3 tiết)', 'Bài 42: Kết quả có thể và sự kiện (2 tiết)'], is_kiem_tra: false },
  { tuan: 35, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Bài 43: Xác suất thực nghiệm (3 tiết)', 'Ôn tập cuối học kỳ 2 (2 tiết)', 'Kiểm tra cuối học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_2' },
];

export const CHAN_TROI_TOAN_6_TIMELINE: TimelineWeek[] = [
  // Học kỳ 1
  { tuan: 1, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 1: Tập hợp. Phần tử của tập hợp (2 tiết)', 'Bài 2: Tập hợp số tự nhiên. Ghi số tự nhiên (1 tiết)'], is_kiem_tra: false },
  { tuan: 2, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 3: Các phép tính trong tập hợp số tự nhiên (2 tiết)', 'Bài 4: Lũy thừa với số mũ tự nhiên (2 tiết)'], is_kiem_tra: false },
  { tuan: 3, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 5: Thứ tự thực hiện các phép tính (2 tiết)', 'Bài 6: Chia hết và chia có dư. Tính chất chia hết của một tổng (2 tiết)'], is_kiem_tra: false },
  { tuan: 4, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 7: Dấu hiệu chia hết cho 2, cho 5 (2 tiết)', 'Bài 8: Dấu hiệu chia hết cho 3, cho 9 (2 tiết)'], is_kiem_tra: false },
  { tuan: 5, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 9: Ước và bội (2 tiết)', 'Bài 10: Số nguyên tố. Hợp số. Phân tích một số ra thừa số nguyên tố (2 tiết)'], is_kiem_tra: false },
  { tuan: 6, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 11: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài 12: Ước chung, ước chung lớn nhất (3 tiết - Tiết 1, 2)'], is_kiem_tra: false },
  { tuan: 7, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 12: Ước chung, ước chung lớn nhất (Tiết 3)', 'Bài 13: Bội chung, bội chung nhỏ nhất (3 tiết)'], is_kiem_tra: false },
  { tuan: 8, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Bài 14: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 1 (3 tiết)'], is_kiem_tra: false },
  { tuan: 9, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_TU_NHIEN'], ten_bai: ['Ôn tập giữa học kỳ 1 (2 tiết)', 'Kiểm tra giữa học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_1' },
  { tuan: 10, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 1: Số nguyên âm và tập hợp các số nguyên (3 tiết)'], is_kiem_tra: false },
  { tuan: 11, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 2: Thứ tự trong tập hợp số nguyên (2 tiết)', 'Bài 3: Phép cộng và phép trừ hai số nguyên (4 tiết - Tiết 1, 2)'], is_kiem_tra: false },
  { tuan: 12, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 3: Phép cộng và phép trừ hai số nguyên (Tiết 3, 4)', 'Bài 4: Phép nhân và phép chia hai số nguyên (4 tiết - Tiết 1, 2)'], is_kiem_tra: false },
  { tuan: 13, hoc_ky: 1, chu_de_ids: ['TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 4: Phép nhân và phép chia hai số nguyên (Tiết 3, 4)', 'Bài 5: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 2 (3 tiết)'], is_kiem_tra: false },
  { tuan: 14, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Bài 1: Hình vuông - Tam giác đều - Lục giác đều (3 tiết)', 'Bài 2: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân (4 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 15, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Bài 2: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân (Tiết 2, 3, 4)', 'Bài 3: Chu vi và diện tích của một số hình trong thực tiễn (3 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 16, hoc_ky: 1, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN', 'TOAN_L6_THONG_KE'], ten_bai: ['Bài 3: Chu vi và diện tích của một số hình trong thực tiễn (Tiết 2, 3)', 'Bài 4: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 3 (3 tiết)', 'Bài 1: Thu thập và phân loại dữ liệu (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 17, hoc_ky: 1, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Bài 1: Thu thập và phân loại dữ liệu (Tiết 2)', 'Bài 2: Biểu diễn dữ liệu trên bảng (3 tiết)', 'Bài 3: Biểu đồ tranh (2 tiết - Tiết 1)'], is_kiem_tra: false },
  { tuan: 18, hoc_ky: 1, chu_de_ids: ['TOAN_L6_THONG_KE', 'TOAN_L6_SO_NGUYEN'], ten_bai: ['Bài 3: Biểu đồ tranh (Tiết 2)', 'Bài 4: Biểu đồ cột – Biểu đồ cột kép (4 tiết)', 'Bài 5: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 4 (3 tiết)', 'Ôn tập cuối học kỳ 1 (2 tiết)', 'Kiểm tra cuối học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_1' },
  // Học kỳ 2
  { tuan: 19, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 1: Phân số với tử số và mẫu số là số nguyên (2 tiết)', 'Bài 2: Tính chất cơ bản của phân số (2 tiết)'], is_kiem_tra: false },
  { tuan: 20, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 3: So sánh phân số (2 tiết)', 'Bài 4: Phép cộng và phép trừ phân số (2 tiết)'], is_kiem_tra: false },
  { tuan: 21, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 5: Phép nhân và phép chia phân số (3 tiết)', 'Bài 6: Giá trị phân số của một số (1 tiết)'], is_kiem_tra: false },
  { tuan: 22, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 7: Hỗn số (2 tiết)', 'Bài 8: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 5 (1 tiết)'], is_kiem_tra: false },
  { tuan: 23, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 1: Số thập phân (2 tiết)', 'Bài 2: Các phép tính với số thập phân (2 tiết)'], is_kiem_tra: false },
  { tuan: 24, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 3: Làm tròn số thập phân và ước lượng kết quả (2 tiết)', 'Bài 4: Tỉ số và số phần trăm (2 tiết)'], is_kiem_tra: false },
  { tuan: 25, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO'], ten_bai: ['Bài 5: Bài toán về tỉ số phần trăm (2 tiết)', 'Bài 6: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 6 (1 tiết)'], is_kiem_tra: false },
  { tuan: 26, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Bài 1: Hình có trục đối xứng (2 tiết)', 'Bài 2: Hình có tâm đối xứng (2 tiết)'], is_kiem_tra: false },
  { tuan: 27, hoc_ky: 2, chu_de_ids: ['TOAN_L6_PHAN_SO', 'TOAN_L6_HINH_HOC_TRUC_QUAN'], ten_bai: ['Ôn tập giữa học kỳ 2 (2 tiết)', 'Kiểm tra giữa học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_2' },
  { tuan: 28, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_TRUC_QUAN', 'TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 3: Vai trò của tính đối xứng trong thế giới tự nhiên (1 tiết)', 'Bài 4: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 7 (1 tiết)', 'Bài 1: Điểm. Đường thẳng (1 tiết)'], is_kiem_tra: false },
  { tuan: 29, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 2: Ba điểm thẳng hàng. Ba điểm không thẳng hàng (2 tiết)', 'Bài 3: Hai đường thẳng cắt nhau, song song. Tia (2 tiết)'], is_kiem_tra: false },
  { tuan: 30, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 4: Đoạn thẳng. Độ dài đoạn thẳng (2 tiết)', 'Bài 5: Trung điểm của đoạn thẳng (2 tiết)'], is_kiem_tra: false },
  { tuan: 31, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG'], ten_bai: ['Bài 6: Góc (2 tiết)', 'Bài 7: Số đo góc. Các góc đặc biệt (2 tiết)'], is_kiem_tra: false },
  { tuan: 32, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG', 'TOAN_L6_THONG_KE'], ten_bai: ['Bài 8: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 8 (2 tiết)', 'Bài 1: Phép thử nghiệm – Sự kiện (1 tiết)'], is_kiem_tra: false },
  { tuan: 33, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Bài 1: Phép thử nghiệm – Sự kiện (tiếp) (1 tiết)', 'Bài 2: Xác suất thực nghiệm (3 tiết)'], is_kiem_tra: false },
  { tuan: 34, hoc_ky: 2, chu_de_ids: ['TOAN_L6_THONG_KE'], ten_bai: ['Bài 3: Hoạt động thực hành và trải nghiệm (1 tiết)', 'Bài tập cuối chương 9 (2 tiết)', 'Ôn tập cuối học kỳ 2 (1 tiết)'], is_kiem_tra: false },
  { tuan: 35, hoc_ky: 2, chu_de_ids: ['TOAN_L6_HINH_HOC_PHANG', 'TOAN_L6_THONG_KE'], ten_bai: ['Ôn tập cuối học kỳ 2 (tiếp) (2 tiết)', 'Kiểm tra cuối học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_2' },
];

export const CANH_DIEU_NGU_VAN_6_TIMELINE: TimelineWeek[] = [
  // Học kỳ 1
  { tuan: 1, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 1: Truyện - Đọc hiểu: Thánh Gióng (3 tiết)'] , is_kiem_tra: false },
  { tuan: 2, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 1: Truyện - Đọc hiểu: Thạch Sanh (3 tiết)'] , is_kiem_tra: false },
  { tuan: 3, hoc_ky: 1, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 1: Truyện - Thực hành Tiếng Việt: Từ đơn, từ phức, từ ghép, từ láy (2 tiết)'] , is_kiem_tra: false },
  { tuan: 4, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 1: Truyện - Thực hành đọc: Sự tích Hồ Gươm (2 tiết)', 'Viết: Kể lại một truyện truyền thuyết hoặc cổ tích (2 tiết)'] , is_kiem_tra: false },
  { tuan: 5, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Bài 1: Truyện - Nói và nghe: Kể lại một truyện cổ tích (2 tiết)', 'Bài 2: Thơ - Đọc hiểu: À ơi tay mẹ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 6, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 2: Thơ - Đọc hiểu: Về thăm mẹ (2 tiết)', 'Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 7, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_VIET'], ten_bai: ['Bài 2: Thơ - Thực hành đọc: Ca dao Việt Nam (2 tiết)', 'Viết: Tập làm thơ lục bát (2 tiết)', 'Viết đoạn văn ghi lại cảm nghĩ về bài thơ lục bát (2 tiết)'] , is_kiem_tra: false },
  { tuan: 8, hoc_ky: 1, chu_de_ids: ['NV_L6_THO'], ten_bai: ['Bài 2: Thơ - Nói và nghe: Trình bày ý kiến về một vấn đề (2 tiết)', 'Ôn tập giữa học kỳ 1 (2 tiết)'] , is_kiem_tra: false },
  { tuan: 9, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra giữa học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_1' },
  { tuan: 10, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI'], ten_bai: ['Bài 3: Kí - Đọc hiểu: Trong lòng mẹ (3 tiết)'] , is_kiem_tra: false },
  { tuan: 11, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 3: Kí - Đọc hiểu: Đồng Tháp Mười mùa nước nổi (2 tiết)', 'Thực hành Tiếng Việt: Từ đa nghĩa, đồng âm, từ mượn (2 tiết)'] , is_kiem_tra: false },
  { tuan: 12, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI', 'NV_L6_VIET'], ten_bai: ['Bài 3: Kí - Thực hành đọc: Thời thơ ấu của Hon-đa (2 tiết)', 'Viết: Kể lại một kỉ niệm của bản thân (2 tiết)'] , is_kiem_tra: false },
  { tuan: 13, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI', 'NV_L6_THO'], ten_bai: ['Bài 3: Kí - Nói và nghe: Kể về một kỉ niệm của bản thân (2 tiết)', 'Bài 4: Thơ - Đọc hiểu: Cảnh khuya và Nguyên tiêu (2 tiết)'] , is_kiem_tra: false },
  { tuan: 14, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 4: Thơ - Đọc hiểu: Vẽ quê hương (2 tiết)', 'Thực hành Tiếng Việt: Điệp ngữ, từ láy (2 tiết)'] , is_kiem_tra: false },
  { tuan: 15, hoc_ky: 1, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 4: Thơ - Viết: Viết bài văn tả cảnh sinh hoạt (3 tiết)', 'Nói và nghe: Trình bày ý kiến về một hiện tượng (1 tiết)'] , is_kiem_tra: false },
  { tuan: 16, hoc_ky: 1, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 5: Văn bản thông tin - Đọc hiểu: Giờ Trái Đất (3 tiết)', 'Thực hành Tiếng Việt: Dấu ngoặc kép, dấu gạch ngang (1 tiết)'] , is_kiem_tra: false },
  { tuan: 17, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Bài 5: Văn bản thông tin - Thực hành đọc: Trái Đất - Cái nôi của sự sống (2 tiết)', 'Ôn tập cuối học kỳ 1 (2 tiết)'] , is_kiem_tra: false },
  { tuan: 18, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra cuối học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_1' },
  // Học kỳ 2
  { tuan: 19, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 6: Truyện - Đọc hiểu: Bài học đường đời đầu tiên (3 tiết)'] , is_kiem_tra: false },
  { tuan: 20, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 6: Truyện - Đọc hiểu: Ông lão đánh cá và con cá vàng (2 tiết)', 'Thực hành Tiếng Việt: Mở rộng chủ ngữ bằng cụm từ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 21, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 6: Truyện - Thực hành đọc: Cô bé bán diêm (2 tiết)', 'Viết: Viết bài văn kể lại một trải nghiệm đáng nhớ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 22, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Bài 6: Truyện - Nói và nghe: Kể lại trải nghiệm đáng nhớ (1 tiết)', 'Bài 7: Thơ - Đọc hiểu: Đêm nay Bác không ngủ (3 tiết)'] , is_kiem_tra: false },
  { tuan: 23, hoc_ky: 2, chu_de_ids: ['NV_L6_THO', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 7: Thơ - Đọc hiểu: Lượm (2 tiết)', 'Thực hành Tiếng Việt: Biện pháp tu từ hoán dụ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 24, hoc_ky: 2, chu_de_ids: ['NV_L6_THO', 'NV_L6_VIET'], ten_bai: ['Bài 7: Thơ - Thực hành đọc: Gấu con chân vòng kiềng (2 tiết)', 'Viết: Đoạn văn ghi lại cảm xúc về bài thơ tự sự, miêu tả (2 tiết)'] , is_kiem_tra: false },
  { tuan: 25, hoc_ky: 2, chu_de_ids: ['NV_L6_THO'], ten_bai: ['Bài 7: Thơ - Nói và nghe: Trình bày ý kiến về một vấn đề (2 tiết)', 'Ôn tập giữa học kỳ 2 (2 tiết)'] , is_kiem_tra: false },
  { tuan: 26, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra giữa học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_2' },
  { tuan: 27, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 8: Văn bản nghị luận - Đọc hiểu: Vì sao chúng ta phải đối xử thân thiện với động vật (3 tiết)'] , is_kiem_tra: false },
  { tuan: 28, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 8: Văn bản nghị luận - Đọc hiểu: Khan hiếm nước ngọt (2 tiết)', 'Thực hành Tiếng Việt: Nghĩa của từ Hán Việt (2 tiết)'] , is_kiem_tra: false },
  { tuan: 29, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 8: Văn bản nghị luận - Thực hành đọc: Tại sao nên có vật nuôi trong nhà (2 tiết)', 'Viết: Bài văn trình bày ý kiến về một hiện tượng đời sống (2 tiết)'] , is_kiem_tra: false },
  { tuan: 30, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 8: Văn bản nghị luận - Nói và nghe (1 tiết)', 'Bài 9: Truyện - Đọc hiểu: Bức tranh của em gái tôi (3 tiết)'] , is_kiem_tra: false },
  { tuan: 31, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 9: Truyện - Đọc hiểu: Điều không tính trước (2 tiết)', 'Thực hành Tiếng Việt: Trạng ngữ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 32, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 9: Truyện - Thực hành đọc: Chích bông ơi! (2 tiết)', 'Viết: Viết bài văn tả cảnh sinh hoạt (2 tiết)'] , is_kiem_tra: false },
  { tuan: 33, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 10: Văn bản thông tin - Đọc hiểu: Phạm Tuyên và ca khúc mừng chiến thắng (3 tiết)', 'Thực hành Tiếng Việt: Lựa chọn từ ngữ và cấu trúc câu (1 tiết)'] , is_kiem_tra: false },
  { tuan: 34, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 10: Văn bản thông tin - Thực hành đọc: Điều gì giúp học sinh Phần Lan tự học? (2 tiết)', 'Viết: Viết biên bản (2 tiết)'] , is_kiem_tra: false },
  { tuan: 35, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Bài 10: Văn bản thông tin - Nói và nghe (1 tiết)', 'Ôn tập cuối học kỳ 2 (2 tiết)', 'Kiểm tra cuối học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_2' },
];

export const KET_NOI_NGU_VAN_6_TIMELINE: TimelineWeek[] = [
  // Học kỳ 1
  { tuan: 1, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 1: Tôi và các bạn - Đọc hiểu: Bài học đường đời đầu tiên (Tiết 1, 2) (2 tiết)'] , is_kiem_tra: false },
  { tuan: 2, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 1: Tôi và các bạn - Đọc hiểu: Nếu cậu muốn có một người bạn (2 tiết)', 'Thực hành Tiếng Việt: Từ đơn, từ phức, từ ghép, từ láy (2 tiết)'] , is_kiem_tra: false },
  { tuan: 3, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 1: Tôi và các bạn - Thực hành đọc: Bắt nạt (1 tiết)', 'Viết: Viết bài văn kể lại một trải nghiệm của em (3 tiết)'] , is_kiem_tra: false },
  { tuan: 4, hoc_ky: 1, chu_de_ids: ['NV_L6_THO'], ten_bai: ['Bài 1: Tôi và các bạn - Nói và nghe: Kể lại trải nghiệm của em (2 tiết)', 'Bài 2: Gõ cửa trái tim - Đọc hiểu: Chuyện cổ tích về loài người (2 tiết)'] , is_kiem_tra: false },
  { tuan: 5, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 2: Gõ cửa trái tim - Đọc hiểu: Mây và sóng (2 tiết)', 'Thực hành Tiếng Việt: Biện pháp tu từ ẩn dụ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 6, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 2: Gõ cửa trái tim - Thực hành đọc: Bức tranh của em gái tôi (2 tiết)', 'Viết: Đoạn văn ghi lại cảm xúc về một bài thơ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 7, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 2: Gõ cửa trái tim - Nói và nghe (1 tiết)', 'Bài 3: Yêu thương và chia sẻ - Đọc hiểu: Cô bé bán diêm (3 tiết)'] , is_kiem_tra: false },
  { tuan: 8, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 3: Yêu thương và chia sẻ - Đọc hiểu: Gió lạnh đầu mùa (2 tiết)', 'Thực hành Tiếng Việt: Cụm danh từ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 9, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra giữa học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_1' },
  { tuan: 10, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 3: Yêu thương và chia sẻ - Thực hành đọc: Con chào mào (1 tiết)', 'Viết: Viết bài văn đóng vai nhân vật kể lại truyện cổ tích (3 tiết)'] , is_kiem_tra: false },
  { tuan: 11, hoc_ky: 1, chu_de_ids: ['NV_L6_THO'], ten_bai: ['Bài 3: Yêu thương và chia sẻ - Nói và nghe (2 tiết)', 'Bài 4: Quê hương yêu dấu - Đọc hiểu: Chùm ca dao về quê hương đất nước (2 tiết)'] , is_kiem_tra: false },
  { tuan: 12, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 4: Quê hương yêu dấu - Đọc hiểu: Chuyện cổ nước mình (2 tiết)', 'Thực hành Tiếng Việt: Cụm động từ, cụm tính từ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 13, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_VIET'], ten_bai: ['Bài 4: Quê hương yêu dấu - Thực hành đọc: Việt Nam quê hương ta (2 tiết)', 'Viết: Đoạn văn ghi lại cảm xúc về bài thơ lục bát (2 tiết)'] , is_kiem_tra: false },
  { tuan: 14, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI'], ten_bai: ['Bài 4: Quê hương yêu dấu - Nói và nghe (1 tiết)', 'Bài 5: Những nẻo đường xứ sở - Đọc hiểu: Cô Tô (3 tiết)'] , is_kiem_tra: false },
  { tuan: 15, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 5: Những nẻo đường xứ sở - Đọc hiểu: Hang Én (2 tiết)', 'Thực hành Tiếng Việt: Từ mượn, nghĩa của từ mượn (2 tiết)'] , is_kiem_tra: false },
  { tuan: 16, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI', 'NV_L6_VIET'], ten_bai: ['Bài 5: Những nẻo đường xứ sở - Thực hành đọc: Cửu Long Giang ta ơi (2 tiết)', 'Viết: Viết bài văn tả cảnh sinh hoạt (2 tiết)'] , is_kiem_tra: false },
  { tuan: 17, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_HOI_KI'], ten_bai: ['Bài 5: Những nẻo đường xứ sở - Nói và nghe (1 tiết)', 'Ôn tập cuối học kỳ 1 (3 tiết)'] , is_kiem_tra: false },
  { tuan: 18, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra cuối học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_1' },
  // Học kỳ 2
  { tuan: 19, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 6: Chuyện kể về những người anh hùng - Đọc hiểu: Thánh Gióng (3 tiết)'] , is_kiem_tra: false },
  { tuan: 20, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 6: Chuyện kể về những người anh hùng - Đọc hiểu: Sự tích Hồ Gươm (2 tiết)', 'Thực hành Tiếng Việt: Lựa chọn từ ngữ và cấu trúc câu (2 tiết)'] , is_kiem_tra: false },
  { tuan: 21, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 6: Chuyện kể về những người anh hùng - Thực hành đọc: Hội thổi cơm thi ở Đồng Vân (2 tiết)', 'Viết: Bài văn đóng vai nhân vật kể lại truyện truyền thuyết (2 tiết)'] , is_kiem_tra: false },
  { tuan: 22, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 6: Chuyện kể về những người anh hùng - Nói và nghe (1 tiết)', 'Bài 7: Thế giới cổ tích - Đọc hiểu: Thạch Sanh (3 tiết)'] , is_kiem_tra: false },
  { tuan: 23, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 7: Thế giới cổ tích - Đọc hiểu: Cây khế (2 tiết)', 'Thực hành Tiếng Việt: Trạng ngữ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 24, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 7: Thế giới cổ tích - Thực hành đọc: Vua chích chòe (2 tiết)', 'Viết: Viết bài văn kể lại một truyện cổ tích (2 tiết)'] , is_kiem_tra: false },
  { tuan: 25, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 7: Thế giới cổ tích - Nói và nghe (1 tiết)', 'Ôn tập giữa học kỳ 2 (3 tiết)'] , is_kiem_tra: false },
  { tuan: 26, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra giữa học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_2' },
  { tuan: 27, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 8: Khác biệt và gần gũi - Đọc hiểu: Xem người ta kìa! (3 tiết)'] , is_kiem_tra: false },
  { tuan: 28, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 8: Khác biệt và gần gũi - Đọc hiểu: Hai loại khác biệt (2 tiết)', 'Thực hành Tiếng Việt: Từ Hán Việt, dấu ngoặc kép (2 tiết)'] , is_kiem_tra: false },
  { tuan: 29, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 8: Khác biệt và gần gũi - Thực hành đọc: Lá vối (1 tiết)', 'Viết: Viết bài văn trình bày ý kiến về một vấn đề (3 tiết)'] , is_kiem_tra: false },
  { tuan: 30, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 8: Khác biệt và gần gũi - Nói và nghe (1 tiết)', 'Bài 9: Trái Đất - ngôi nhà chung - Đọc hiểu: Trái Đất - cái nôi của sự sống (3 tiết)'] , is_kiem_tra: false },
  { tuan: 31, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 9: Trái Đất - ngôi nhà chung - Đọc hiểu: Các loài chung sống như thế nào? (2 tiết)', 'Thực hành Tiếng Việt: Dấu chấm phẩy, dấu gạch ngang (2 tiết)'] , is_kiem_tra: false },
  { tuan: 32, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 9: Trái Đất - ngôi nhà chung - Thực hành đọc: Trái Đất (1 tiết)', 'Viết: Viết bài văn trình bày ý kiến về một hiện tượng (3 tiết)'] , is_kiem_tra: false },
  { tuan: 33, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 10: Cuốn sách tôi yêu - Giới thiệu cuốn sách (2 tiết)', 'Thực hành Tiếng Việt: Mở rộng thành phần chính bằng cụm từ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 34, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 10: Cuốn sách tôi yêu - Viết: Giới thiệu một cuốn sách (2 tiết)', 'Nói và nghe: Giới thiệu cuốn sách yêu thích (2 tiết)'] , is_kiem_tra: false },
  { tuan: 35, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Ôn tập cuối học kỳ 2 (2 tiết)', 'Kiểm tra cuối học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_2' },
];

export const CHAN_TROI_NGU_VAN_6_TIMELINE: TimelineWeek[] = [
  // Học kỳ 1
  { tuan: 1, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 1: Lắng nghe lịch sử nước mình - Đọc hiểu: Thánh Gióng (3 tiết)'] , is_kiem_tra: false },
  { tuan: 2, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 1: Lắng nghe lịch sử nước mình - Đọc hiểu: Sự tích Hồ Gươm (2 tiết)', 'Thực hành Tiếng Việt: Từ đơn, từ phức, từ ghép, từ láy (2 tiết)'] , is_kiem_tra: false },
  { tuan: 3, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 1: Lắng nghe lịch sử nước mình - Thực hành đọc: Bánh chưng, bánh giầy (2 tiết)', 'Viết: Tóm tắt nội dung chính của một văn bản (2 tiết)'] , is_kiem_tra: false },
  { tuan: 4, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 1: Lắng nghe lịch sử nước mình - Nói và nghe (1 tiết)', 'Bài 2: Miền cổ tích - Đọc hiểu: Sọ Dừa (3 tiết)'] , is_kiem_tra: false },
  { tuan: 5, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 2: Miền cổ tích - Đọc hiểu: Em bé thông minh (2 tiết)', 'Thực hành Tiếng Việt: Nghĩa của từ, từ mượn (2 tiết)'] , is_kiem_tra: false },
  { tuan: 6, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 2: Miền cổ tích - Thực hành đọc: Chuyện loài chim (2 tiết)', 'Viết: Viết bài văn kể lại một truyện cổ tích (2 tiết)'] , is_kiem_tra: false },
  { tuan: 7, hoc_ky: 1, chu_de_ids: ['NV_L6_THO'], ten_bai: ['Bài 2: Miền cổ tích - Nói và nghe (1 tiết)', 'Bài 3: Vẻ đẹp quê hương - Đọc hiểu: Những câu hát dân gian về vẻ đẹp quê hương (3 tiết)'] , is_kiem_tra: false },
  { tuan: 8, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 3: Vẻ đẹp quê hương - Đọc hiểu: Việt Nam quê hương ta (2 tiết)', 'Thực hành Tiếng Việt: Biện pháp tu từ so sánh, ẩn dụ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 9, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra giữa học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_1' },
  { tuan: 10, hoc_ky: 1, chu_de_ids: ['NV_L6_THO', 'NV_L6_VIET'], ten_bai: ['Bài 3: Vẻ đẹp quê hương - Thực hành đọc: Về bài thơ Mưa xuân (1 tiết)', 'Viết: Đoạn văn cảm nhận bài thơ lục bát (3 tiết)'] , is_kiem_tra: false },
  { tuan: 11, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 3: Vẻ đẹp quê hương - Nói và nghe (1 tiết)', 'Bài 4: Những trải nghiệm trong đời - Đọc hiểu: Bài học đường đời đầu tiên (3 tiết)'] , is_kiem_tra: false },
  { tuan: 12, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 4: Những trải nghiệm trong đời - Đọc hiểu: Giọt sương đêm (2 tiết)', 'Thực hành Tiếng Việt: Phó từ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 13, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 4: Những trải nghiệm trong đời - Thực hành đọc: Vừa nhắm mắt vừa mở cửa sổ (2 tiết)', 'Viết: Viết bài văn kể lại một trải nghiệm của bản thân (2 tiết)'] , is_kiem_tra: false },
  { tuan: 14, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI'], ten_bai: ['Bài 4: Những trải nghiệm trong đời - Nói và nghe (1 tiết)', 'Bài 5: Trò chuyện cùng thiên nhiên - Đọc hiểu: Lao xao ngày hè (3 tiết)'] , is_kiem_tra: false },
  { tuan: 15, hoc_ky: 1, chu_de_ids: ['NV_L6_HOI_KI', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 5: Trò chuyện cùng thiên nhiên - Đọc hiểu: Thương nhớ bầy ong (2 tiết)', 'Thực hành Tiếng Việt: Ẩn dụ, nhân hóa (2 tiết)'] , is_kiem_tra: false },
  { tuan: 16, hoc_ky: 1, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 5: Trò chuyện cùng thiên nhiên - Thực hành đọc: Đánh thức trầu (1 tiết)', 'Viết: Viết bài văn tả cảnh sinh hoạt (3 tiết)'] , is_kiem_tra: false },
  { tuan: 17, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_HOI_KI'], ten_bai: ['Bài 5: Trò chuyện cùng thiên nhiên - Nói và nghe (1 tiết)', 'Ôn tập cuối học kỳ 1 (3 tiết)'] , is_kiem_tra: false },
  { tuan: 18, hoc_ky: 1, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra cuối học kỳ 1 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_1' },
  // Học kỳ 2
  { tuan: 19, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 6: Điểm tựa tinh thần - Đọc hiểu: Gió lạnh đầu mùa (3 tiết)'] , is_kiem_tra: false },
  { tuan: 20, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 6: Điểm tựa tinh thần - Đọc hiểu: Tuổi thơ tôi (2 tiết)', 'Thực hành Tiếng Việt: Từ đa nghĩa, từ đồng âm (2 tiết)'] , is_kiem_tra: false },
  { tuan: 21, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_VIET'], ten_bai: ['Bài 6: Điểm tựa tinh thần - Thực hành đọc: Chiếc lá cuối cùng (2 tiết)', 'Viết: Viết biên bản một cuộc họp (2 tiết)'] , is_kiem_tra: false },
  { tuan: 22, hoc_ky: 2, chu_de_ids: ['NV_L6_THO'], ten_bai: ['Bài 6: Điểm tựa tinh thần - Nói và nghe (1 tiết)', 'Bài 7: Gia đình yêu thương - Đọc hiểu: Những cánh buồm (3 tiết)'] , is_kiem_tra: false },
  { tuan: 23, hoc_ky: 2, chu_de_ids: ['NV_L6_THO', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 7: Gia đình yêu thương - Đọc hiểu: Mây và sóng (2 tiết)', 'Thực hành Tiếng Việt: Từ mượn, nghĩa của từ mượn (2 tiết)'] , is_kiem_tra: false },
  { tuan: 24, hoc_ky: 2, chu_de_ids: ['NV_L6_THO', 'NV_L6_VIET'], ten_bai: ['Bài 7: Gia đình yêu thương - Thực hành đọc: Chị sẽ gọi em bằng tên (2 tiết)', 'Viết: Đoạn văn ghi lại cảm xúc về bài thơ (2 tiết)'] , is_kiem_tra: false },
  { tuan: 25, hoc_ky: 2, chu_de_ids: ['NV_L6_THO'], ten_bai: ['Bài 7: Gia đình yêu thương - Nói và nghe (1 tiết)', 'Ôn tập giữa học kỳ 2 (3 tiết)'] , is_kiem_tra: false },
  { tuan: 26, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Kiểm tra giữa học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_2' },
  { tuan: 27, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 8: Những góc nhìn cuộc sống - Đọc hiểu: Học thầy học bạn (3 tiết)'] , is_kiem_tra: false },
  { tuan: 28, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 8: Những góc nhìn cuộc sống - Đọc hiểu: Bàn về nhân vật Thánh Gióng (2 tiết)', 'Thực hành Tiếng Việt: Từ Hán Việt, nghĩa từ Hán Việt (2 tiết)'] , is_kiem_tra: false },
  { tuan: 29, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 8: Những góc nhìn cuộc sống - Thực hành đọc: Góc nhìn (1 tiết)', 'Viết: Viết bài văn trình bày ý kiến về một hiện tượng (3 tiết)'] , is_kiem_tra: false },
  { tuan: 30, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN'], ten_bai: ['Bài 8: Những góc nhìn cuộc sống - Nói và nghe (1 tiết)', 'Bài 9: Nuôi dưỡng tâm hồn - Đọc hiểu: Con muốn làm một cái cây (3 tiết)'] , is_kiem_tra: false },
  { tuan: 31, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_TIENG_VIET'], ten_bai: ['Bài 9: Nuôi dưỡng tâm hồn - Đọc hiểu: Và tôi vẫn muốn mẹ... (2 tiết)', 'Thực hành Tiếng Việt: Lựa chọn từ ngữ và cấu trúc câu (2 tiết)'] , is_kiem_tra: false },
  { tuan: 32, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 9: Nuôi dưỡng tâm hồn - Thực hành đọc: Hai con dê qua cầu (1 tiết)', 'Viết: Viết bài văn kể lại một trải nghiệm (3 tiết)'] , is_kiem_tra: false },
  { tuan: 33, hoc_ky: 2, chu_de_ids: ['NV_L6_TIENG_VIET'], ten_bai: ['Bài 10: Mẹ thiên nhiên - Đọc hiểu: Lễ cúng Thần Lúa của người Chơ-ro (3 tiết)', 'Thực hành Tiếng Việt: Trạng ngữ (1 tiết)'] , is_kiem_tra: false },
  { tuan: 34, hoc_ky: 2, chu_de_ids: ['NV_L6_VIET'], ten_bai: ['Bài 10: Mẹ thiên nhiên - Viết: Viết biên bản một cuộc thảo luận (2 tiết)', 'Bài 11: Bạn sẽ giải quyết việc này như thế nào? (2 tiết)'] , is_kiem_tra: false },
  { tuan: 35, hoc_ky: 2, chu_de_ids: ['NV_L6_TRUYEN', 'NV_L6_THO'], ten_bai: ['Bài 11: Nói và nghe (2 tiết)', 'Ôn tập và kiểm tra cuối học kỳ 2 (2 tiết)'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_2' },
];

export const GLOBAL_SUCCESS_TIENG_ANH_6_TIMELINE: TimelineWeek[] = [
  // Học kỳ 1
  { tuan: 1, hoc_ky: 1, chu_de_ids: ['ENG_L6_SCHOOL'], ten_bai: ['Unit 1: My New School - Day 1'], is_kiem_tra: false },
  { tuan: 2, hoc_ky: 1, chu_de_ids: ['ENG_L6_SCHOOL'], ten_bai: ['Unit 1: My New School - Day 2'], is_kiem_tra: false },
  { tuan: 3, hoc_ky: 1, chu_de_ids: ['ENG_L6_HOME'], ten_bai: ['Unit 2: My Home - Day 1'], is_kiem_tra: false },
  { tuan: 4, hoc_ky: 1, chu_de_ids: ['ENG_L6_HOME'], ten_bai: ['Unit 2: My Home - Day 2'], is_kiem_tra: false },
  { tuan: 5, hoc_ky: 1, chu_de_ids: ['ENG_L6_SCHOOL'], ten_bai: ['Unit 3: My Friends - Day 1'], is_kiem_tra: false },
  { tuan: 6, hoc_ky: 1, chu_de_ids: ['ENG_L6_SCHOOL'], ten_bai: ['Unit 3: My Friends - Day 2'], is_kiem_tra: false },
  { tuan: 7, hoc_ky: 1, chu_de_ids: ['ENG_L6_SCHOOL'], ten_bai: ['Unit 4: My Neighbourhood - Day 1'], is_kiem_tra: false },
  { tuan: 8, hoc_ky: 1, chu_de_ids: ['ENG_L6_SCHOOL'], ten_bai: ['Unit 4: My Neighbourhood - Day 2'], is_kiem_tra: false },
  { tuan: 9, hoc_ky: 1, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Kiểm tra giữa học kỳ 1'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_1' },
  { tuan: 10, hoc_ky: 1, chu_de_ids: ['ENG_L6_FESTIVALS'], ten_bai: ['Unit 5: Natural Wonders of Viet Nam - Day 1'], is_kiem_tra: false },
  { tuan: 11, hoc_ky: 1, chu_de_ids: ['ENG_L6_FESTIVALS'], ten_bai: ['Unit 5: Natural Wonders of Viet Nam - Day 2'], is_kiem_tra: false },
  { tuan: 12, hoc_ky: 1, chu_de_ids: ['ENG_L6_FESTIVALS'], ten_bai: ['Unit 6: Our Tet Holiday - Day 1'], is_kiem_tra: false },
  { tuan: 13, hoc_ky: 1, chu_de_ids: ['ENG_L6_FESTIVALS'], ten_bai: ['Unit 6: Our Tet Holiday - Day 2'], is_kiem_tra: false },
  { tuan: 14, hoc_ky: 1, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Review 2 (Unit 4 - 5 - 6)'], is_kiem_tra: false },
  { tuan: 15, hoc_ky: 1, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Semester 1 Revision'], is_kiem_tra: false },
  { tuan: 16, hoc_ky: 1, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Semester 1 Review'], is_kiem_tra: false },
  { tuan: 17, hoc_ky: 1, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['General English Practice'], is_kiem_tra: false },
  { tuan: 18, hoc_ky: 1, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Kiểm tra cuối học kỳ 1'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_1' },
  // Học kỳ 2
  { tuan: 19, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 7: Television - Day 1'], is_kiem_tra: false },
  { tuan: 20, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 7: Television - Day 2'], is_kiem_tra: false },
  { tuan: 21, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 8: Sports and Games - Day 1'], is_kiem_tra: false },
  { tuan: 22, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 8: Sports and Games - Day 2'], is_kiem_tra: false },
  { tuan: 23, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 9: Cities of the World - Day 1'], is_kiem_tra: false },
  { tuan: 24, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 9: Cities of the World - Day 2'], is_kiem_tra: false },
  { tuan: 25, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 10: Our House in the Future - Day 1'], is_kiem_tra: false },
  { tuan: 26, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 10: Our House in the Future - Day 2'], is_kiem_tra: false },
  { tuan: 27, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Kiểm tra giữa học kỳ 2'], is_kiem_tra: true, loai_kiem_tra: 'giua_ky_2' },
  { tuan: 28, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 11: Our Greener World - Day 1'], is_kiem_tra: false },
  { tuan: 29, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 11: Our Greener World - Day 2'], is_kiem_tra: false },
  { tuan: 30, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 12: Robots - Day 1'], is_kiem_tra: false },
  { tuan: 31, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Unit 12: Robots - Day 2'], is_kiem_tra: false },
  { tuan: 32, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Review 4 (Unit 10 - 11 - 12)'], is_kiem_tra: false },
  { tuan: 33, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Semester 2 Review'], is_kiem_tra: false },
  { tuan: 34, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Semester 2 Revision'], is_kiem_tra: false },
  { tuan: 35, hoc_ky: 2, chu_de_ids: ['ENG_L6_GRAMMAR'], ten_bai: ['Kiểm tra cuối học kỳ 2'], is_kiem_tra: true, loai_kiem_tra: 'cuoi_ky_2' },
];

