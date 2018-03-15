export class AppConfig {

/*  Definimos el host utilizado en el front*/
    public static HOST_SERVICE = 'https://cors-anywhere.herokuapp.com/http://107.155.87.153:8080/oasis/';
/*public static HOST_SERVICE = 'http://107.155.87.153:8080/oasis/';*/
public static API_ENDPOINT_LOGIN_CLIENTE = AppConfig.HOST_SERVICE + 'cliente/login';
public static API_ENDPOINT_CREAR_CLIENTE = AppConfig.HOST_SERVICE + 'cliente/crear';
public static API_ENDPOINT_CONFIRMAR_CLIENTE = AppConfig.HOST_SERVICE + 'cliente/confirmar';
public static API_ENDPOINT_BUSCAR_CLIENTE = AppConfig.HOST_SERVICE + 'cliente/listar';
public static API_ENDPOINT_BUSCAR_ENVASE_CLIENTE = AppConfig.HOST_SERVICE + 'envase/listar';
public static API_ENDPOINT_ELIMINAR_CLIENTE = AppConfig.HOST_SERVICE + 'cliente/eliminar';
public static API_ENDPOINT_MODIFICAR_CLIENTE = AppConfig.HOST_SERVICE + 'cliente/modificar';
public static API_ENDPOINT_RECUPERAR_CLAVE = AppConfig.HOST_SERVICE + 'cliente/clave/olvido';
public static API_ENDPOINT_CAMBIAR_CLAVE = AppConfig.HOST_SERVICE + 'cliente/clave/nueva';
public static API_ENDPOINT_BUSCAR_DISPENSADOR = AppConfig.HOST_SERVICE + 'dispensador/listar';
public static API_ENDPOINT_LISTAR_DISPENSADORES = AppConfig.HOST_SERVICE + 'dispensador/tipos/listar';
public static API_ENDPOINT_LISTAR_UBICACIONES = AppConfig.HOST_SERVICE + 'dispensador/ubicaciones/listar';
public static API_ENDPOINT_LISTAR_ESTACIONES = AppConfig.HOST_SERVICE + 'dispensador/estaciones/listar';
public static API_ENDPOINT_LISTAR_ESTADO_DISPENSADOR = AppConfig.HOST_SERVICE + 'dispensador/estados/listar';
public static API_ENDPOINT_ELIMINAR_DISPENSADOR = AppConfig.HOST_SERVICE + 'dispensador/eliminar';
public static API_ENDPOINT_CREAR_DISPENSADOR = AppConfig.HOST_SERVICE + 'dispensador/crear';
public static API_ENDPOINT_MODIFICAR_DISPENSADOR = AppConfig.HOST_SERVICE + 'dispensador/modificar';
public static API_ENDPOINT_ELIMINAR_ENVASE = AppConfig.HOST_SERVICE + 'envase/eliminar';
public static API_ENDPOINT_RECARGAS_ENVASE = AppConfig.HOST_SERVICE + 'envase/recargas/listar';
public static API_ENDPOINT_CONSUMOS_ENVASE = AppConfig.HOST_SERVICE + 'envase/consumos/listar';
public static API_ENDPOINT_CARGAR_ENVASES = AppConfig.HOST_SERVICE + 'envase/crear';
public static API_ENDPOINT_MODIFICAR_ENVASES = AppConfig.HOST_SERVICE + 'envase/modificar';
}
