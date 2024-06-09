package com.template.restapi.feature.user.actions;

import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class UtilAction {

    public boolean isToday(String date){
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date today = new Date();
        String strToday = simpleDateFormat.format(today);
        String paymentsDate = date.split(" ")[0];
        return strToday.equals(paymentsDate);
    }

    public boolean compareDateWithTodayForMissionOperatePeriod(String operatePeriod) {
        try {
            // 오늘 날짜
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
            Date date = new Date();
            // 전체 기간 split 해서 분리
            String[] operatePeriodArr = operatePeriod.split(" ~ ");
            Date startDate = simpleDateFormat.parse(operatePeriodArr[0]);
            Date endDate = simpleDateFormat.parse(operatePeriodArr[1]);
            // 비교
            int compareResultOfStartDate = date.compareTo(startDate);
            int compareResultOfEndDate = date.compareTo(endDate);
            return compareResultOfStartDate > 0 && compareResultOfEndDate < 0;
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

}
