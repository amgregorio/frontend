//fonte: http://www.voltsdigital.com.br/labs/gruntjs-por-onde-comecar/
module.exports = function(grunt){

    // Dentro do grunt.initConfig são passadas
    // as configurações dos plugins instalados 
    // no formato de objeto javascript (JSON).
    // Para saber mais sobre configurações basta
    //acessar a página de plugins do grunt: http://gruntjs.com/plugins
    grunt.initConfig({

        uglify : {
            options : {
                mangle : false
            },

            // Aqui são passadas as configurações dos arquivos
            // que serão minificados. Não precisa ser "my_target",
            // pode ser qualquer nome.
            my_target : {
                // Primeiro é passado o destino e depois o arquivo de origem,
                // na ordem em que devem ser minificados, no formato array.
                files : {
                    'js/main.js' : [ 'assets/_js/scripts.js' ]
                }
            }
        }, // uglify

        less : {
            dist : {
                options : {style : 'compressed'},
                files : {
                    'styles/style.css' : 'assets/_less/style.less'
                }
            }
        }, // sass

        watch : {
            dist : {
                //arquivos que deve ser assisitdos
                files : [
                    'assets/_js/**/*',
                    'assets/_less/**/*',
                    'layouts/**'
                ],

                tasks : ['uglify', 'less', 'pug']
            }
        },// watch

        pug : {
            compile: {
                    options: {
                      data: {
                        debug: false
                      }
                    },
                    files: [
                        {
                            'layouts/index.html' : ['layouts/index.pug']
                        }
                    ]
                }
            }
    });

    // Aqui são carregados são carregados os plugins
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-pug' );


    // Cria a tarefa. O primeiro parâmetro é o nome da tarefa
    // e o segundo parâmetro é um array com as tarefas que serão 
    // executadas ao rodar esse comando.
    grunt.registerTask( 'default', [ 'uglify', 'less', 'pug']);

    //tarefa watch
    grunt.registerTask( 'w', [ 'watch' ]);
};