import { EnvioService } from "../src/service/EnvioService";

describe("EnvioService", () => {

    it("deve processar envio quando dados forem válidos", () => {
        const mockTransportadora = {
            enviar: jest.fn().mockReturnValue(true)
        };

        const envioService = new EnvioService(mockTransportadora as any);

        const resultado = envioService.processarEnvio(10, "12345-678");

        expect(resultado).toBe("Envio processado com sucesso");
        expect(mockTransportadora.enviar).toHaveBeenCalledWith(10, "12345-678", 20);
    });

    it("deve lançar erro quando CEP estiver vazio", () => {
        const mockTransportadora = {
            enviar: jest.fn()
        };

        const envioService = new EnvioService(mockTransportadora as any);

        expect(() => envioService.processarEnvio(10, ""))
            .toThrow("CEP obrigatório");

        expect(mockTransportadora.enviar).not.toHaveBeenCalled();
    });

    it("deve lançar erro quando peso for maior que 50kg", () => {
        const mockTransportadora = {
            enviar: jest.fn()
        };

        const envioService = new EnvioService(mockTransportadora as any);

        expect(() => envioService.processarEnvio(60, "12345-678"))
            .toThrow("Peso excede o limite permitido");

        expect(mockTransportadora.enviar).not.toHaveBeenCalled();
    });

    it("deve lançar erro quando transportadora recusar envio", () => {
        const mockTransportadora = {
            enviar: jest.fn().mockReturnValue(false)
        };

        const envioService = new EnvioService(mockTransportadora as any);

        expect(() => envioService.processarEnvio(20, "12345-678"))
            .toThrow("Envio recusado pela transportadora");

        expect(mockTransportadora.enviar).toHaveBeenCalledWith(20, "12345-678", 40);
    });

});