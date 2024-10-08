package com.max.quizspring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationResponseDto {
    private Long id;
    private String status;
    private Long jobId;
    private String coverLetter;
    private String resumeLink;
    private String applicationDate;
    private String interviewDate;
}
