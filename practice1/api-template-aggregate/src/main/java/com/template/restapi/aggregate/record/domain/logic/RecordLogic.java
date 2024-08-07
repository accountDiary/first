package com.template.restapi.aggregate.record.domain.logic;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import com.template.restapi.aggregate.record.store.RecordStore;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordLogic {
    private final RecordStore recordStore;

    public RecordLogic(RecordStore recordStore) { this.recordStore = recordStore; }

    public List<RecordDto> readRecords(String date) {
        return recordStore.selectRecord(date);
    }

    public void saveRecords(List<RecordDto> records) {
        recordStore.insertRecords(records);
    }

    public int recordCnt(String date) {
        return recordStore.recordCnt(date);
    }
}
