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



});