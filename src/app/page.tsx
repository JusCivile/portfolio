import { Button } from "@/components/ui/button";
import Threads from "@/components/Threads";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Threads amplitude={2} distance={0} enableMouseInteraction={true} color={[1, 1, 1]} />
      </div>
      <Header/>
    </div>
  );
}
