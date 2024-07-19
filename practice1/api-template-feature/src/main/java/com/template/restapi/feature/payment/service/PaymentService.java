package com.template.restapi.feature.payment.service;

import com.template.restapi.aggregate.payment.domain.entity.PaymentDto;
import com.template.restapi.aggregate.payment.domain.logic.PaymentLogic;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class PaymentService {

    private final PaymentLogic paymentLogic;

    public List<PaymentDto> loadPaymentList() {
        return paymentLogic.loadPaymentList();
    }
}
