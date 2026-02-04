import {
  Billings,
  Products,
  Project,
  User,
  Reports,
} from "../../../components/common/Icons";
import { paths } from "../../../config/paths";

import { useHolidayStore } from "../../../store/hr/holidayStore";
import { useEmployeeStore } from "../../../store/hr/employeeStore";
import { useAttendanceStore } from "../../../store/hr/attendanceStore";
import { useSalaryStore } from "../../../store/hr/salaryStore";
import { useOnboardingStore } from "../../../store/hr/onboardingStore";
import { useOffboardingStore } from "../../../store/hr/offboardingStore";

import { createHolidayColumns } from "./columns/holidayColumns";
import { createEmployeeColumns } from "./columns/employeeColumns";
import { createAttendanceColumns } from "./columns/attendanceColumns";
import { createSalaryColumns } from "./columns/salaryColumns";
import { createOnboardingColumns } from "./columns/onboardingColumns";
import { createOffboardingColumns } from "./columns/offboardingColumns";

export const HR_CONFIG = {
  onboard: {
    path: paths.hronboard,
    title: "Manage OnBoarding Info",
    sectionLabel: "OnBoarding Details",
    icon: <Project />,
    searchKey: "name",
    useStore: useOnboardingStore,
    dataKey: "onboardingList",
    createColumns: createOnboardingColumns,
  },
  offboard: {
    path: paths.hroffboard,
    title: "Manage OffBoarding Info",
    sectionLabel: "OffBoarding Details",
    icon: <Billings />,
    searchKey: "name",
    useStore: useOffboardingStore,
    dataKey: "offboardingList",
    createColumns: createOffboardingColumns,
  },
  holidays: {
    path: paths.hrholiday,
    title: "Manage Holiday Lists",
    sectionLabel: "Holiday Informations",
    icon: <Products />,
    searchKey: "name",
    useStore: useHolidayStore,
    dataKey: "holidays",
    createColumns: createHolidayColumns,
  },
  employees: {
    path: paths.hremployee,
    title: "Manage Employee Lists",
    sectionLabel: "Employee Details",
    icon: <User />,
    searchKey: "name",
    useStore: useEmployeeStore,
    dataKey: "employees",
    createColumns: createEmployeeColumns,
  },
  attendance: {
    path: paths.hrattendance,
    title: "Manage Attendance Informations",
    sectionLabel: "Attendance Details",
    icon: <User />,
    searchKey: "month",
    useStore: useAttendanceStore,
    dataKey: "attendance",
    createColumns: createAttendanceColumns,
  },
  salaries: {
    path: paths.hrsalary,
    title: "Manage Salary Informations",
    sectionLabel: "Salary Details",
    icon: <Reports />,
    searchKey: "name",
    useStore: useSalaryStore,
    dataKey: "salaries",
    createColumns: createSalaryColumns,
  },
};
