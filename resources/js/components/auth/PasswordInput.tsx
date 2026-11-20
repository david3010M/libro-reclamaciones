import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function PasswordInput(props: React.ComponentProps<typeof Input>) {
    const [visible, setVisible] = useState(false);
    return (
        <div className="relative">
            <Input {...props} type={visible ? 'text' : 'password'} className="h-11 pr-11 text-base sm:h-10 sm:text-sm" />
            <Button
                type="button"
                variant="ghost"
                size="icon"
                tabIndex={-1}
                aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                aria-pressed={visible}
                className="absolute top-1/2 right-1 size-8 -translate-y-1/2 text-muted-foreground"
                onClick={() => setVisible((v) => !v)}
            >
                {visible ? <EyeOff /> : <Eye />}
            </Button>
        </div>
    );
}
