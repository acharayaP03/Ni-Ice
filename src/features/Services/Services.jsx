import { services } from '../../constants';
import ServicesCard from '../../components/Services/ServicesCard';

export default function Services() {
  return (
    <div className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </div>
  );
}
