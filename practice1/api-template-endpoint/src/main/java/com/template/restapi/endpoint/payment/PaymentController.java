package com.template.restapi.endpoint.payment;

import com.template.restapi.aggregate.payment.domain.entity.PaymentDto;
import com.template.restapi.feature.payment.service.PaymentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("/list")
    public List<PaymentDto> loadPaymentList() {
        return paymentService.loadPaymentList();
    }
}
