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

    public void saveRecords(List<RecordDto> records) {
        recordLogic.saveRecords(records);
    }
}
