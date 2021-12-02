const edi = {
  hospitalId: { type: String, hashKey: true },
  id: { type: String, rangeKey: true },
  receiptNumber: String,
  groupNumber: String,
  claimNumber: String,
  noticeNumber: String,
  date: { type: Date, index: { name: "date" } },
  type: String,
  branch: String,
  insuranceType: String,
  content: {
    receiptReturn: {
      results: [
        {
          result: String, // 결과
          transmitTime: Number, // 청구일자(=전송일)
          receiptDate: String, // 접수일자
          category: String, // 문서구분
          insuranceType: String, // 보험자 구분
          claimNumber: String, // 청구번호
          receiptNumber: String, // 접수번호
          count: Number, // 건수
          claim: Number, // 청구액
          nursingInstitutionNumber: String // 요양기관기호
        }
      ], // 결과/구분
      reasons: [
        {
          receiptDate: String, // 접수일자
          claimNumber: String, // 청구번호
          serialNumber: String, // 명세서일련번호
          code: String, // 반송코드
          desc: String // 비고
        }
      ] // 반송코드/비고
    },
    examResult: {
      info: {
        stage: String, // 심사차수
        receiptNumber: String, // 접수번호
        groupNumber: String, // 묶음번호
        claimNumber: String, // 청구번호
        staffInCharge: String, // 담당자
        phoneNumber: String // 전화번호
      }, // 정보
      claim: {
        count: Number, // 합계 (건)
        price: Number, // 요양급여비용 총액
        charge: Number, // 본인부담금 합계
        disabled: Number, // 장애인의료비 합계
        claim: Number // 청구액
      }, // 청구내용
      result: {
        count: Number, // 합계 (건)
        price: Number, // 요양급여비용 총액
        charge: Number, // 본인부담금 합계
        disabled: Number, // 장애인의료비 합계
        decidedPrice: Number // 심사 결정액
      }, // 심사결과
      summary: {
        coordinatedCount: Number, // 조정 합계 (건)
        coordinatedPrice: Number, // 조정 금액 합계
        ineligibledCount: Number, // 심사불능 합계 (건)
        ineligibledPrice: Number, // 심사불능 금액 합계
        diffDeductedPrice: Number, // 차등 차감액
        decidedPrice: Number // 심사결정 금액
      }, // 계
      coordinateIneligibles: [
        {
          claimNumber: String, // 청구번호
          serialNumber: String, // 명일련 번호
          chartNumber: String, // 차트번호
          name: String, // 이름
          date: Number, // 진료일
          totalClaimPrice: Number, // 청구 총 진료비
          totalDecidedPrice: Number, // 심사결과 총 진료비
          claimPrice: Number, // 청구액
          decidedPrice: Number, // 심사결정액
          chargeRefund: Number, // 본인부담환급금
          claim: {
            price: Number, // 요양급여비용 총액
            charge: Number, // 본인부담금 합계
            disabled: Number, // 장애인의료비 합계
            lessThan100: Number, // 100/100 미만 청구액
            claim: Number // 청구액
          }, // 청구내용
          result: {
            price: Number, // 요양급여비용 총액
            charge: Number, // 본인부담금 합계
            disabled: Number, // 장애인의료비 합계
            lessThan100: Number, // 100/100 미만 청구액
            decidedPrice: Number // 심사결정액
          }, // 심사결과
          summary: {
            coordinatedPrice: Number, // 조정금액
            chargeRefund: Number // 본인부담환급금
          }, // 결과/정보
          details: [
            {
              code: String,
              cost: Number,
              coordinatedPrice: Number,
              count: Number,
              coordinatedReason: String,
              coordinatedDetailReason: String,
              ineligibledDetailCode: String,
              desc: String
            }
          ], // 심사조정/불능 상세내역
          prescriptions: [
            {
              prescriptionNumber: String,
              lineNumber: Number,
              count: Number,
              reason: String,
              desc: String
            }
          ], // 원외처방 조정내역
          entrusts: [
            {
              code: String,
              price: Number,
              desc: String
            }
          ], // 위탁사항
          actionSelectiveWages: [
            {
              code: String,
              cost: Number,
              reason: String,
              count: Number,
              dosingCount: Number,
              charge: Number,
              desc: String
            }
          ], // 선별 급여수가 본인부담 조정내역
          prescriptionSelectiveWages: [
            {
              prescriptionNumber: String,
              lineNumber: Number,
              reason: String,
              desc: String
            }
          ], // 선별 급여처방 본인부담 조정내역
          chart: String,
          patient: String
        }
      ] // 조정, 심사불능 내역
    },
    materialSupplementRequest: {
      noticeNumber: String, // 통보번호
      noticeApplicationNumber: String, // 통보서 신청번호
      noticeType: String, // 통보서구분
      lineNumber: Number, // 제출한 통보서 줄번호
      code: String, // 통보품목코드
      name: String, // 통보품목
      guideType: String, // 안내사항구분
      guideDetail: String, // 안내사항내역
      requestType: String, // 자료요청구분
      requestDetail: String // 자료요청내역
    }
  },
  lastModifiedStaff: String,
  lastModifiedTime: Number,
  createTime: {
    type: Date,
    index: { name: "createTime" }
  }
};

export default edi;
