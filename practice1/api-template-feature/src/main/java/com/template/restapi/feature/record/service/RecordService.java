package com.template.restapi.feature.record.service;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import com.template.restapi.aggregate.record.domain.logic.RecordLogic;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class RecordService {
    private final RecordLogic recordLogic;

    public List<RecordDto> readRecords(String date) {
        return recordLogic.readRecords(date);
    }

    public void saveRecords(List<RecordDto> records) {
        recordLogic.saveRecords(records);
    }

    public int recordCnt(String date) {
        return recordLogic.recordCnt(date);
    }

    public void modifyRecords(List<RecordDto> recordsLists, List<RecordDto> records) {
        // 기존 가계부 수정
        recordLogic.modifyRecords(recordsLists);

        // 새로운 가계부 삽입
        recordLogic.saveRecords(records);
    }
}
