import { useState } from 'react';
import { Workflow, Users, Calendar, BarChart3, DollarSign } from 'lucide-react';
import Styles from './Slider2.module.css';

const Slider2 = () => {
  const [activeTab, setActiveTab] = useState('workflow');

  const tabs = [
    { id: 'workflow', icon: Workflow, label: 'Workflow' },
    { id: 'roles', icon: Users, label: 'Roles & Permissions' },
    { id: 'leave', icon: Calendar, label: 'Leave and Holiday Management' },
    { id: 'hrms', icon: BarChart3, label: 'HRMS' },
    { id: 'payroll', icon: DollarSign, label: 'Payroll' },
  ];

  const tabContent = {
    workflow: {
      title: 'Workflow',
      paragraph: 'No Qu modernized attendance requests with a smart, automated flow across HR and reporting managers. From leave and permissions to late check-ins, overtime, comp offs, and week-offs, every request is tracked with clarity. With built in alerts, approvals, and escalations, the system ensures seamless processing without delays.',
      features: [
        'Leave & Permission Management',
        'Overtime & Comp-off Tracking',
        'Late Check-in & Week off Requests',
        'Automated Alerts, Approvals & Escalations',
      ],
    },
    roles: {
      title: 'Roles & Permissions',
      paragraph: 'No Qu ensures secure and structured access with role based permissions. Define user roles, control data visibility, and streamline approvals to maintain accuracy and accountability across the organization. With flexible configurations, every team gets the right level of access they need.',
      features: [
        'Role-based Access Control',
        'Configurable User Permissions',
        'Secure Data Visibility',
        'Streamlined Approval Hierarchy',
      ],
    },
    leave: {
      title: 'Leave and Holiday Management',
      paragraph: 'No Qu simplifies leave management with an intuitive and transparent process. From customizing holidays and comp offs to streamlining approvals, every step is effortless. Employees can track and manage their own leave while HR ensures accuracy, compliance, and smooth operations.',
      features: [
        'Holiday & Comp-off Customization',
        'Effortless Leave Approvals',
        'Employee Self-service Leave Tracking',
        'Transparent Leave Management',
      ],
    },
    hrms: {
      title: 'HRMS',
      paragraph: 'No Qu HRMS is a fully integrated platform designed to align attendance with every core HR function. From payroll readiness to performance tracking, it simplifies all workforce management while maintaining compliance and operational efficiency. Whether teams operate in office, remotely, or in hybrid environments, No Qu HRMS ensures clarity, control, and consistency across all processes.',
      features: [
        'Recruitment',
        'Employee self-service portal',
        'Performance Management',
        'Asset Management',
      ],
    },
    payroll: {
      title: 'Payroll',
      paragraph: 'Manage payroll with ease using attendance integrated automation. From payroll ready timesheets to synchronized leave and overtime calculations, No Qu Payroll ensures accuracy, compliance, and faster processing. Built for flexibility, it adapts to every pay cycle, project, or contractor requirement.',
      features: [
        'Bank API Integration',
        'Salary Management',
        'Loan and Advance Management',
        'Tax Management',
      ],
    },
  };

  const currentTab = tabContent[activeTab];

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const tabWidth = e.target.clientWidth; // Use clientWidth for dynamic width
    const activeIndex = Math.round(scrollLeft / tabWidth);
    if (activeIndex >= 0 && activeIndex < tabs.length) {
      setActiveTab(tabs[activeIndex].id);
    }
  };

  return (
    <div className={Styles['workforce-container']}>
      <div className={Styles['hero-section']}>
        <h1 className={Styles['hero-title']}>
          From Clock-Ins to Reports<br />
          Your Workforce Simplified
        </h1>
      </div>

      <div className={Styles['tabs-container']} onScroll={handleScroll}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${Styles.tab} ${activeTab === tab.id ? Styles['tab-active'] : ''}`}
            >
              <IconComponent className={Styles['tab-icon']} size={28} />
              <span className={Styles['tab-label']}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className={Styles['content-section']}>
        <div className={Styles['features-section']}>
          <h2 className={Styles['section-title']}>{currentTab.title}</h2>
          <p className={Styles['tab-paragraph']}>{currentTab.paragraph}</p>
          <ul className={Styles['features-list']}>
            {currentTab.features.map((feature, index) => (
              <li key={index} className={Styles['feature-item']}>
                <span className={Styles['checkmark']}>✓</span>
                <span className={Styles['feature-text']}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={Styles['video-section']}>
          {activeTab === 'workflow' && (
            <video className={Styles['tab-video']} autoPlay muted loop>
              <source src="videos/workflow.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {activeTab === 'roles' && (
            <video className={Styles['tab-video']} autoPlay muted loop>
              <source src="videos/roles.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {activeTab === 'leave' && (
            <video className={Styles['tab-video']} autoPlay muted loop>
              <source src="videos/leave.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {activeTab === 'hrms' && (
            <video className={Styles['tab-video']} autoPlay muted loop>
              <source src="videos/hrms.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {activeTab === 'payroll' && (
            <video className={Styles['tab-video']} autoPlay muted loop>
              <source src="videos/payroll.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider2;
