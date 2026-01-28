
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'AIR_QUALITY_STATION',
    client: 'IoT Project',
    category: 'IOT / EMBEDDED',
    description: 'Portable multi-sensor monitoring station featuring a custom PCB-based 7-sensor array. Integrated Wi-Fi Access Point server for real-time JSON streaming and Flutter-based visualization.',
    images: [
      '/projects/air-quality/1.jpg',
      '/projects/air-quality/2.jpg',
      '/projects/air-quality/3.jpg'
    ],
    tags: ['Arduino Nano RP2040', 'Custom PCB', 'Flutter', '3D Printing'],
    status: 'COMPLETED'
  },
  {
    id: '02',
    title: 'FACIAL_RECOGNITION_AI',
    client: 'AI/ML Project',
    category: 'MACHINE LEARNING',
    description: 'AI-powered attendance system using DeepFace for real-time facial recognition via webcam. Features role-based authentication and interactive Plotly dashboards.',
    images: [
      '/projects/facial-recognition/1.jpg',
      '/projects/facial-recognition/2.jpg'
    ],
    tags: ['Flask', 'OpenCV', 'DeepFace', 'Firebase'],
    status: 'COMPLETED'
  },
  {
    id: '03',
    title: 'HEALTH_WEARABLE',
    client: 'Wearable Tech',
    category: 'WEARABLE TECH',
    description: 'Physiological data platform capturing ECG, EEG, and GSR. Developed MicroPython firmware for real-time sensor fusion and MQTT telemetry to a Flutter mobile interface.',
    images: [
      '/projects/hms/20250907_200928.jpg',
      '/projects/hms/20250907_201541.jpg',
      '/projects/hms/20250907_205432.jpg',
      '/projects/hms/20250907_205517.jpg',
      '/projects/hms/20250907_205635.jpg'
    ],
    tags: ['MicroPython', 'MQTT', 'Arduino Nano', 'Custom PCB'],
    status: 'COMPLETED'
  },
  {
    id: '04',
    title: 'DRONE_FREQUENCY_HOPPING',
    client: 'RF Communications',
    category: 'AEROSPACE LOGIC',
    description: 'Developed a bidirectional NRF24L01 communication system with dynamic frequency hopping (1-50 channels) to ensure robust data transmission in contested RF environments.',
    images: [
      '/projects/drone/1.jpg',
      '/projects/drone/2.jpg'
    ],
    tags: ['Raspberry Pi', 'CircuitPython', 'NRF24L01', 'GPS'],
    status: 'IN_PROGRESS'
  },
  {
    id: '05',
    title: 'GARDENING_COMPANION',
    client: 'IoT / AI',
    category: 'IOT / AI',
    description: 'ESP32-based IoT system with Python ML crop recommendation engine. Integrates WeatherAPI and OpenStreetMap for intelligent irrigation and environmental tracking.',
    images: [
      '/projects/gardening/1.jpg',
      '/projects/gardening/2.jpg'
    ],
    tags: ['ESP32', 'Python ML', 'Flutter', 'Railway'],
    status: 'COMPLETED'
  }
];

export const TECHNICAL_SKILLS = {
  languages: ['Python', 'Dart', 'C', 'C++', 'SQL'],
  frameworks: ['TensorFlow', 'NumPy', 'Flask', 'FastAPI', 'Flutter'],
  tools: ['Linux', 'Git', 'Arduino IDE', 'Firebase', 'AWS IoT', 'VS Code'],
  competencies: ['Data Structures', 'Machine Learning', 'IoT Systems', 'PCB Design']
};
