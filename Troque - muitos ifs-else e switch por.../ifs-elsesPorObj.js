/* Como evitar emaranhados de ifs-elses ou swits-cases 
trocando por objeto lierais */


// Exemplo if-else

function usuarioSistem(tipo) {
    if ( tipo === 'administrativo' ) {
        return '\nif/else- Este usuario é do setor administrativo'
    }else if ( tipo === 'vendas' ) {
        return '\nif/else- Este usuario é do setor de vendas'
    }else if ( tipo === 'rh' ) {
        return '\nif/else- Este usuario é do setor de recursos humanos'
    }else if ( tipo === 'dev' ) {
        return '\nif/else- Este usuario é do setor de desenvolvimento de software '
    }else if ( tipo === 'devOps' ) {
        return '\nif/else- Este usuario é do setor de desenvolvimento de infra estrutura '
    } else {
        return '\nif/else- Ops, usuario invalido'
    }
}
console.log( usuarioSistem( 'devOps' ) );
console.log(usuarioSistem( 'suporte' ));


// Com switch

function usuarioSistem02( tipo ) {
    
    switch (tipo) {
        case 'adm':
            return '\nSwitch/Case-Este usuario é do setor administrativo'
        
        case 'vendas':
            return '\nSwitch/Case- Este usuario é do setor de vendas'
            
        case 'rh':
            return '\nSwitch/Case- Este usuario é do setor de recursos humanos'
        
        case 'dev':
            return '\nSwitch/Case- Este usuario é do setor de desenvolvimento de software'
        
        case 'devOps':
            return '\nSwitch/Case- Este usuario é do setor de desenvolvimento de infra estrutura '
        
        default:
            return '\nSwitch/Case- Ops, usuario invalido'
    }
}
console.log( usuarioSistem02( 'vendas' ) );
console.log( usuarioSistem02( 'financeiro' ) );


// Objeto liretal - Bem menos linhas

function usuarioSistemObj( tipo ) {
    
    const usuario = {
        adm: '\n Obj literal- Este usuario é do setor administrativo',
        vendas: '\n Obj literal- Este usuario é do setor de vendas',
        rh: '\n Obj literal- Este usuario é do setor de recursos humanos',
        dev: '\n Obj literal- Este usuario é do setor de desenvolvimento de software',
        devOps: '\n Obj literal- Este usuario é do setor de desenvolvimento de infra estrutura ',
        invalido: '\n Obj literal- Ops! usuario invalido'
    }
    return usuario[tipo] || usuario.invalido
}
console.log(usuarioSistemObj('adm'));
console.log(usuarioSistemObj('cobrança'));