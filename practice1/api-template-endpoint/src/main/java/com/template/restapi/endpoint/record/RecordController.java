package com.template.restapi.endpoint.record;

import com.template.restapi.aggregate.record.domain.entity.RecordDto;
import com.template.restapi.feature.record.service.RecordService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/record")
public class RecordController {

    private final RecordService recordService;

    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveRecords(@RequestBody List<RecordDto> records) {
        try {
            recordService.saveRecords(records);
            System.out.println("성공");
            return ResponseEntity.ok("저장 성공");
        } catch (Exception e) {
            System.out.println("실패");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("저장 실패");
        }
    }
}