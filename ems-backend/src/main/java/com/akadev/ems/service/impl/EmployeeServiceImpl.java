package com.akadev.ems.service.impl;

import com.akadev.ems.dto.EmployeeDto;
import com.akadev.ems.entity.Employee;
import com.akadev.ems.mapper.EmployeeMapper;
import com.akadev.ems.repository.EmployeeRepository;
import com.akadev.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);


        //return null;
    }
}
