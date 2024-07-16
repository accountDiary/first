package com.template.restapi.endpoint.record;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import com.template.restapi.feature.record.service.RecordService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/record")
public class RecordController {

    private final RecordService recordService;

    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @PostMapping("/save")
    public ResponseEntity<Void> saveRecords(@RequestBody List<RecordDto> records) {
        recordService.saveRecords(records);
        return ResponseEntity.ok().build();
    }
}
