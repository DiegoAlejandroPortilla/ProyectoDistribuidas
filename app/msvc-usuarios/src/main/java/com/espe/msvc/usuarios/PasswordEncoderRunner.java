package com.espe.msvc.usuarios;

import com.espe.msvc.usuarios.models.entity.Usuario;
import com.espe.msvc.usuarios.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Component
public class PasswordEncoderRunner implements CommandLineRunner {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        Iterable<Usuario> usuariosIterable = usuarioRepository.findAll();
        List<Usuario> listaUsuarios = StreamSupport.stream(usuariosIterable.spliterator(), false)
                .collect(Collectors.toList());

        for (Usuario usuario : listaUsuarios) {
            String encodedPassword = passwordEncoder.encode(usuario.getPassword());
            usuario.setPassword(encodedPassword);
            usuarioRepository.save(usuario);
            System.out.println("Usuario: " + usuario.getNombre() +
                    ", Contraseña encriptada: " + usuario.getPassword());
        }
    }
}
